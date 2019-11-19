import { Injectable } from "@angular/core";
import { Observable } from "rxjs"; 
import { ApiService } from "./api.service";

/* Service is for dealing with product related functionalities */
@Injectable()
export class ProductService {
    cartCount=0; 

    constructor(private apiService: ApiService){}

    getAllProducts():Observable<any>{
      return  this.apiService.getProductCall();
    }
}