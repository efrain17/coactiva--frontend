import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../services/api.service'
import { TitularesService } from '../services/titulares.service'
import { Cartera } from '../common/interface'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { TitularesComponent } from '../titulares/titulares.component'

@Component({
  selector: 'app-titulares-emitidos',
  templateUrl: './titulares-emitidos.component.html',
  styleUrls: ['./titulares-emitidos.component.css'],
  providers: [TitularesService]
})
export class TitularesEmitidosComponent implements OnInit {

  private data;
  private filterQuery = "";
  private rowsOnPage = 5;
  private sortBy = "nombres";
  private sortBytitulares= "emitidos";
  private sortOrder = "asc";
  private numRegisters:number ;
  closeResult: string;

  constructor(private http: Http,
  			      private as: ApiService,
              private titularesSv:TitularesService,
              private modalService: NgbModal ) {   	
  }

  ngOnInit() {
  	this.as.getCarteraEmitidos()
    	.then(cartera => this.data = cartera )
  }

  buscarTitulares(){
      if (this.sortBytitulares=="emitidos")
       this.as.getCarteraEmitidos()
              .then(cartera => this.data = cartera )
      else if (this.sortBytitulares=="vencidos")
        this.as.getCarteraVencidos()
              .then(cartera => this.data = cartera )
      else if (this.sortBytitulares=="aPagoHabil")
        this.as.getCarteraAutoPagoHabil()
              .then(cartera => this.data = cartera )
              
      console.log(this.sortBytitulares)
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
      this.titularesSv.setModalSelected("ordenPago")
  }

  filtroSeleccionado(idCoactiva){
    this.data=this.data.filter(data=>data.codigocatastral!=idCoactiva)
  }
  
  open(content,array) {
      this.setToSeleccion(array)
      console.log("abriendo")
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
