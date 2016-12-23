import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ApiService {
  numRegisters: number

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


}

