import { OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { GetdatawinnersService } from './services/getdatawinners.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit, OnDestroy {

  constructor(private getdata: GetdatawinnersService) { }

  //------------initialize angular material table---------\\
  displayedColumns: string[] = ['position', 'points', 'driverName', 'constructorName'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //------------initialize angular material table---------\\
  
  subs: Subscription = new Subscription();
  data = [];
  displayedYear: string = "2020";
  //-------------error control values------------\\
  yearcontrol: boolean = false;
  yearcontrolvalue: number;
  //-------------error control values------------\\

  ngOnInit(): void {
    this.subs.add(this.getdata.getData(this.displayedYear).subscribe(value => {
      this.data = value.MRData.StandingsTable.StandingsLists[0].DriverStandings
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }))
  }
  yearInput() {
    this.displayedYear = (document.getElementById('year-input') as HTMLInputElement).value
    this.yearcontrolvalue = parseInt(this.displayedYear)
    if ((this.yearcontrolvalue < 1950) || (this.yearcontrolvalue > 2020)) {
      this.yearcontrol = true;
      return;
    }
    this.subs.add(this.getdata.getData(this.displayedYear).subscribe(value => {
      this.data = value.MRData.StandingsTable.StandingsLists[0].DriverStandings
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.yearcontrol = false;
    }))
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
