import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Country } from 'src/utils/Country';
import { CovidSummaryResponse } from 'src/utils/CovidSummaryResponse';
import { CovidSummaryService } from '../covid-summary.service';
import { Global } from 'src/utils/Global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

public columnDefs: ColDef[] = [
    { field: 'Country',headerName:'Country Name', sortable: true, filter: true },
    { field: 'NewConfirmed',headerName:'New Confirmed', sortable: true, filter: true },
    { field: 'TotalConfirmed',headerName:'Total Confirmed', sortable: true, filter: true },
    { field: 'NewDeaths',headerName:'New Deaths', sortable: true, filter: true },
    { field: 'TotalDeaths',headerName:'Total Deaths', sortable: true, filter: true },
    { field: 'NewRecovered',headerName:'New Recovered', sortable: true, filter: true },
    { field: 'TotalRecovered',headerName:'Total Recovered', sortable: true, filter: true }
];

public rowData:Country[] = [];
public loading = false;
public globalData: Global | undefined;

  constructor( private covidService:CovidSummaryService) { }

  ngOnInit(): void {

    this.setCovidSummaryData();
  }

  setCovidSummaryData(){
    this.loading = true;
    this.covidService.getCovidSummaryData().subscribe((res: any) =>{
      this.setCountryData(res.Countries);
      this.setGlobalData(res.Global);
      this.loading  = false;
      console.log(this.rowData);
    })
  }

  setCountryData(Countries:Country[]){
    this.rowData = Countries;
  }

  setGlobalData(Global:Global){
    this.globalData = Global;
  }

}
