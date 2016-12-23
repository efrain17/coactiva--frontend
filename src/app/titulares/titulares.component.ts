import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ApiService} from '../services/api.service'
import {Cartera} from '../common/interface'


@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html'
})

export class TitularesComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "codigo_coactiva";
  public sortOrder = "asc";
  public numRegisters:number ;



  constructor(private http: Http,
  			  private as: ApiService) { 
  	
  }

  ngOnInit() {
  	this.as.getCarteraDeudores()
    	.then(cartera => this.data = cartera )
  }

  public toInt(num: string) {
        return +num;
  }

  public sortByWordLength = (a: any) => {
	return a.city.length;
  }

 
}
