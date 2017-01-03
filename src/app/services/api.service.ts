import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ApiService {
  numRegisters: number
  BASE_URL="http://localhost:9000/api"

  constructor(private http:Http) {
    this.numRegisters=0

  }

  getnumRegister(){return this.numRegisters}

  setnumRegister(num){this.numRegisters=num}

  getHeadlines(){
  	let url='/data/titular.json';
  	return this.http.get(url)
  		.toPromise()
  		.then(response => response.json())
  		.catch(this.error)
  }

  getCarteraDeudores(){
    let url=this.BASE_URL+'/deudoresFiltrados';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.error)
  }

  getDeudoresPaginado(pag){
    let url=this.BASE_URL+'/deudores/'+pag;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.error)
  }
  
  getDeudorSelected(codCatastro){
    let url=this.BASE_URL+'/deudas/'+codCatastro;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.error)
  }

  getCarteraEmitidos(){
    let url=this.BASE_URL+'/deudoresOrdenPagodb';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.error)
  }

  getCarteraVencidos(){
    let url='/data/cartera.json';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.error)
  }

  error(error:any){
		return Promise.reject(error.message || error)
  }

  getHeadilneId(id:String){
  	return this.getHeadlines()
  		.then(headlines => headlines.find(headline=> headline.cedulapersona==id))
  }

  //oden pago 
  ordenPago(params: String) {
        return this.http.get(this.BASE_URL + '/ordenarPago/' +params)
            .toPromise()
            .then(response=> response.toString())
            .catch(this.error)
    }

}

