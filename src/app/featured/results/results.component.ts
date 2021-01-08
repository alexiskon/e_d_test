import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResultsserviceService } from './services/resultsservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy  {

  constructor(private getdata: ResultsserviceService) { }

  displayedColumns: string[] = ['position', 'points', 'driverName', 'constructorName'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //------------initialize angular material table---------\\

  subs: Subscription = new Subscription();
  data = [];
  selectedYear: string = "2020";
  selectedRound: string = "1";
  yearCount: number[] = [];
  roundCount: number[] = [];
  info1: string = "";
  info2: string = "";
  //-------------error control values------------\\
  roundControl: boolean;
  //-------------error control values------------\\

  initialize() {
    for (let i = 0; i <= 70; i++) {
      this.yearCount[i] = 2020 - i;
    }
    for (let i = 1; i <= 21; i++) {
      this.roundCount[i] = i;
    }

  }

  ngOnInit(): void {

    this.initialize();
    this.subs.add(this.getdata.getData(this.selectedYear, this.selectedRound).subscribe(value => {
      this.data = value.MRData.RaceTable.Races[0].Results
      this.info1 = `${value.MRData.RaceTable.season}, Round ${value.MRData.RaceTable.round}, Race Results`;
      this.info2 = `${value.MRData.RaceTable.Races[0].Circuit.Location.country}, ${value.MRData.RaceTable.Races[0].Circuit.circuitName},  ${value.MRData.RaceTable.Races[0].date}`;
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }))
  }

  roundInput() {
    this.selectedRound = (document.getElementById('round') as HTMLInputElement).value.toString()
    this.subs.add(this.getdata.getData(this.selectedYear, this.selectedRound).subscribe(value => {
      if (value.MRData.RaceTable.Races.length === 0) {
        this.roundControl = true;
      } else {
        this.roundControl = false;
      }
      this.info1 = `${value.MRData.RaceTable.season}, Round ${value.MRData.RaceTable.round}, Race Results`;
      this.info2 = `${value.MRData.RaceTable.Races[0].Circuit.Location.country}, ${value.MRData.RaceTable.Races[0].Circuit.circuitName},  ${value.MRData.RaceTable.Races[0].date}`;
      this.data = value.MRData.RaceTable.Races[0].Results
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }))
  }

  yearInput() {
    this.selectedYear = (document.getElementById('year') as HTMLInputElement).value.toString()
    this.subs.add(this.getdata.getData(this.selectedYear, this.selectedRound).subscribe(value => {
      if (value.MRData.RaceTable.Races.length === 0) {
        this.roundControl = true;
      } else {
        this.roundControl = false;
      }
      this.info1 = `${value.MRData.RaceTable.season}, Round ${value.MRData.RaceTable.round}, Race Results`;
      this.info2 = `${value.MRData.RaceTable.Races[0].Circuit.Location.country}, ${value.MRData.RaceTable.Races[0].Circuit.circuitName},  ${value.MRData.RaceTable.Races[0].date}`;
      this.data = value.MRData.RaceTable.Races[0].Results
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }))
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
