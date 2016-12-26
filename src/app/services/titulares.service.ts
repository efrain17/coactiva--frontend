import { Injectable } from '@angular/core';

@Injectable()
export class TitularesService {
  
  public titularSelected: any[]

  constructor() { 
  	this.titularSelected
  }

  getTitularSelected(){ return this.titularSelected }

  setTitularSelected(titular){this.titularSelected=titular}



}
