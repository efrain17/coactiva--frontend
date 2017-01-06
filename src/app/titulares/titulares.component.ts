import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../services/api.service'
import { TitularesService } from '../services/titulares.service'
import { Cartera } from '../common/interface'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
})

export class TitularesComponent implements OnInit {

  private data;
  private filterQuery = "";
  private rowsOnPage = 10;
  private sortBy = "codigocatastral";
  private sortOrder = "asc";
  private numRegisters:number ;
  closeResult: string;

  constructor(private http: Http,
  			      private as: ApiService,
              private titularesSv:TitularesService,
              private modalService: NgbModal ) { 
  	
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

  setToSeleccion(array){
    // hacer consulta para filtrar todas las deudas de un titular s
    this.titularesSv.setTitularSelected(array)
    this.titularesSv.setModalSelected("deudores")
  }

  filtroSeleccionado(idCoactiva){
    this.data=this.data.filter(data=>data.codigocatastral!=idCoactiva)
  }

  open(content,array) {
    this.setToSeleccion(array)
    
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

 
}
