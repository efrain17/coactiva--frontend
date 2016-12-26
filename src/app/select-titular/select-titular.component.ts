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

  public data:Object[];
  private dataTitular;
  private filterQuery = "";
  private rowsOnPage = 5;
  private sortBy = "codigo_coactiva";
  private sortOrder = "asc";
  private numRegisters:number ;
  private titular:string; 
  private reportDir:string="http://www.pdf995.com/samples/pdf.pdf";

  constructor(private http: Http,
  			      private as: ApiService,
              private titularesSv:TitularesService) { }

  ngOnInit() {
    this.data = new Array(this.titularesSv.getTitularSelected())
    this.numRegisters =  this.data.length
    this.dataTitular=this.titularesSv.getTitularSelected()
  }

  generarOrden(){

    this.as.ordenPago(this.dataTitular.codigo_coactiva)
      .then(reportDir=>this.reportDir=reportDir) 
    window.open(this.reportDir,'','width=600,height=600,left=50,top=50,toolbar=yes');

  }



}
