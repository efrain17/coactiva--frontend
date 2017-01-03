import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../services/api.service'
import { TitularesService } from '../services/titulares.service'


@Component({
  selector: 'app-select-titular',
  templateUrl: './select-titular.component.html',
  styleUrls: ['./select-titular.component.css']
})
export class SelectTitularComponent implements OnInit {

  public data;
  private dataTitular;
  private filterQuery = "";
  private rowsOnPage = 5;
  private sortBy = "ano";
  private sortOrder = "asc";
  private numRegisters:number ;
  private titular:string; 
  private reportDir:string='http://www.pdf995.com/samples/pdf.pdf';
  private windowPropiedad='width=600,height=600,left=50,top=50,toolbar=yes';

  constructor(private http: Http,
  			      private as: ApiService,
              private titularesSv:TitularesService) { }

  ngOnInit() {
    this.dataTitular=this.titularesSv.getTitularSelected()
      this.as.getDeudorSelected(this.dataTitular.codigocatastral)
        .then(deudas => {this.data = deudas
          this.numRegisters =  this.data.length})
  }

  generarOrden(){
    this.as.ordenPago(this.dataTitular.codigocatastral)
      .then(reportDir=>{this.reportDir=reportDir
        window.open(this.reportDir,'',this.windowPropiedad) }) 
   }

   titularSelected(dataTitular){
    if (this.titularesSv.getModalSelected() ==='deudores')
      return dataTitular.codigocatastral
    else if (this.titularesSv.getModalSelected() ==='ordenPago')
      return dataTitular.codigocatastral
   }

}
