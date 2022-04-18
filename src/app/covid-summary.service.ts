import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidSummaryService {

  constructor(private http: HttpClient) { }

  getCovidSummaryData(){
    return this.http.get('https://api.covid19api.com/summary');
  }
}
