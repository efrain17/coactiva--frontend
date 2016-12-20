import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ApiService {

  constructor(private http:Http) {

  }

  getHeadlines(){
  	let url='/data/titular.json';
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
  		.then(headlines => headlines.find(headline=> headline.cedulapersona===id))
  }


}

