import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdatawinnersService {

  constructor(private http: HttpClient) { }

  url = 'http://ergast.com/api/f1/'

  getData(year): Observable<any> {
    return this.http.get<any>(this.url + year + '/driverStandings.json')
  }
}
