import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsserviceService {

  constructor(private http: HttpClient) { }

  url = 'http://ergast.com/api/f1/'

  getData(year, round): Observable<any> {
    return this.http.get<any>(`${this.url}${year}/${round}/results.json`)
  }
  getLength(year): Observable<any> {
    return this.http.get<any>(`${this.url}${year}/results.json?limit=420`)
  }
}
