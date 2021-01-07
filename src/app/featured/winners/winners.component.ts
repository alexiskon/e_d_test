import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GetdatawinnersService } from './services/getdatawinners.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

  constructor(private getdata: GetdatawinnersService) { }

   //------------initialize angular material table---------\\
   displayedColumns: string[] = ['position', 'points', 'driverName', 'constructorName'];
   dataSource = new MatTableDataSource();
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
   //------------initialize angular material table---------\\
 
   data = [];
   displayedYear: string = "2020";
 

  ngOnInit(): void {
    this.getdata.getData(this.displayedYear).subscribe(value => {
      this.data = value.MRData.StandingsTable.StandingsLists[0].DriverStandings
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
  yearInput() {
    this.displayedYear = (document.getElementById('year-input') as HTMLInputElement).value
    this.getdata.getData(this.displayedYear).subscribe(value => {
      this.data = value.MRData.StandingsTable.StandingsLists[0].DriverStandings
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

}
