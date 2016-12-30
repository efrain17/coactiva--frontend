import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-mypagtable',
  templateUrl: './mypagtable.component.html',
  styleUrls: ['./mypagtable.component.css']
})
export class MypagtableComponent implements OnInit {
  page:number
  private data
  
  constructor(private http: Http,
              private as: ApiService) { 
   		this.page = 1;
   		this.data=null}

  ngOnInit() {
    this.as.getDeudoresPaginado(this.page-1)
      .then(cartera => this.data = cartera )
  }

  paginaChange(){
    this.as.getDeudoresPaginado(this.page-1)
      .then(cartera => this.data = cartera )
      console.log('pagino')
  }

}
