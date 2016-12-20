import { Component, OnInit, Input } from '@angular/core'
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
  HEADLINE: Headline[]
  headline:Headline
  mystring:string
  search:Search

  constructor(
  	private ApiService: ApiService){
    this.search= { cedula: null, name: null}
  	this.mystring="hola que hace"
    this.seTinitHeadline()
  }

  ngOnInit() {
  }

  getHeadlinerId(){
  	this.ApiService.getHeadilneId("1306476753")
  	.then(headline => this.headline=headline)

    console.log(this.headline)
  }

  seTinitHeadline(){
      this.headline = {
        cedulapersona : null,
        tipo : null,
        apellidos : null,
        nombres : null,
        telefono : null,
        email : null,
        cuentaciudadano : null,
        codanterior : null,
        disponeagua : null,
        tiposervicioagua : null,
        disponealcantarillado : null,
        usoalcantarillado : null,
        estadoalcantarillado : null,
        direccion : null,
        numtitulo : null,
        año :null,
        mes : null,
        totalemitido : null,
        estado : null
      }
  }


}
