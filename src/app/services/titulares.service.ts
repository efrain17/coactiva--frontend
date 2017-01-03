import { Injectable } from '@angular/core';

@Injectable()
export class TitularesService {
  
  public titularSelected: any[]
  public modalSelected:string

  constructor() { 
  	this.titularSelected

  }

  getTitularSelected(){ return this.titularSelected }

  setTitularSelected(titular){ this.titularSelected = titular }

  getModalSelected(){ return this.modalSelected }

  setModalSelected(modalSelected:string){ this.modalSelected  = modalSelected }


}
