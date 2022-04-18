import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Country } from 'src/utils/Country';
import { CovidSummaryResponse } from 'src/utils/CovidSummaryResponse';
import { CovidSummaryService } from '../covid-summary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'Country',headerName:'Country Name', sortable: true, filter: true },
    { field: 'NewConfirmed',headerName:'New Confirmed', sortable: true, filter: true },
    { field: 'TotalConfirmed',headerName:'Total Confirmed', sortable: true, filter: true },
    { field: 'NewDeaths',headerName:'New Deaths', sortable: true, filter: true },
    { field: 'TotalDeaths',headerName:'Total Deaths', sortable: true, filter: true },
    { field: 'NewRecovered',headerName:'New Recovered', sortable: true, filter: true },
    { field: 'TotalRecovered',headerName:'Total Recovered', sortable: true, filter: true }
];

rowData:Country[] = [];

//Country Name, New Confirmed, Total Confirmed, New Deaths, Total Deaths, New Recovered and Total Recovered. 

  constructor( private covidService:CovidSummaryService) { }

  ngOnInit(): void {

    this.setCovidSummaryData();
  }

  setCovidSummaryData(){

    this.covidService.getCovidSummaryData().subscribe((res: any) =>{
      this.rowData = res.Countries;
      console.log(this.rowData);
    })
  }

}
