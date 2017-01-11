import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http'
import { ApiService } from '../services/api.service'
import { TitularesService } from '../services/titulares.service'
import { Cartera } from '../common/interface'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
var FileSaver = require('file-saver');



@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
  styleUrls: ['./titulares.component.css']
})

export class TitularesComponent implements OnInit {

  private data;
  private filterQuery = "";
  private rowsOnPage = 10;
  private sortBy = "codigocatastral";
  private sortOrder = "asc";
  private numRegisters:number ;
  private report: any
  closeResult: string;
  private windowPropiedad = 'width=600,height=600,left=50,top=50,toolbar=yes'

  constructor(private http: Http,
  			      private as: ApiService,
              private titularesSv:TitularesService,
              private modalService: NgbModal) { 
  	
  }

  ngOnInit() {
  	this.as.getCarteraDeudores()
    	.then(cartera => { 
            this.data = cartera 
            this.data = this.data.map(date => {
              date.select = false
              return date
            })
          })
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

  ordenarVarios() {
    let dataSelect = this.data.filter(date => date.select==true)
    dataSelect = dataSelect.map(date =>date.codigocatastral)
    console.log(dataSelect)
    this.as.ordenarPagoVarios(dataSelect)
         .then(report => this.downloadFile(report) )
  }

  downloadFile(data: any){ 
    var blob = new Blob([data.blob()], { type: 'application/pd' });
    var url= window.URL.createObjectURL(blob);
    var filename = 'test.pdf';
    FileSaver.saveAs(blob, filename);
    //window.open(url,'',this.windowPropiedad);
  }

 
}
