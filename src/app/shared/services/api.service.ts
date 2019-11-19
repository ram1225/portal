import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

/* This service is for making service calls */
@Injectable()
export class ApiService {
    PRODUCTS_URL = "./assets/mock-data/Products.json";
    CATEGORIES_URL = "./assets/mock-data/Categories.json";

    constructor(private http:HttpClient){}

    getProductCall():Observable<any>{
      return  this.http.get(this.PRODUCTS_URL);
    }

    getCategoriesCall():Observable<any>{
      return  this.http.get(this.CATEGORIES_URL);
    }
}