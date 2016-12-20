import { Component, OnInit } from '@angular/core'
import {Headline} from '../common/interface'
import {ApiService} from '../services/api.service'

export interface Search {
  cedula: string,
  name: string
}

@Component({
  selector: 'app-juicio-coactiva',
  templateUrl: './juicio-coactiva.component.html',
  styleUrls: ['./juicio-coactiva.component.css'], 
  providers: [ApiService]
})
export class JuicioCoactivaComponent implements OnInit {
  headline: Headline[]
  mystring:'hola que hace'
  search:Search

  constructor(
  	private ApiService: ApiService){
    this.search= { cedula: null, name: null}
  	
  }

  ngOnInit() {
  }

  getHeadlinerId(){
  	this.ApiService.getHeadilneId("1306476753")
  	.then(headline => this.headline=headline)
    console.log(this.headline)
  }

}
