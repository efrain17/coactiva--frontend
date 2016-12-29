import { Pipe, PipeTransform } from "@angular/core";
import { ApiService } from '../services/api.service'

@Pipe({
    name: "dataFilter"
})

export class DataFilterPipe implements PipeTransform {
    
    data= [] 
    num: number
    dataobject

    constructor(private apiService:ApiService){}

    transform(array: any[], query: string): any {
    	 if(query){
    	 	this.data = array.filter( data => 
     		            data.Nombres.toLowerCase().indexOf( query.toLowerCase() ) > -1)
            this.apiService.setnumRegister( this.data.length )
            return this.data
    	 } else { 
            return array
         }
    }

}
