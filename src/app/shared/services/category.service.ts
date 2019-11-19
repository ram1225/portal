import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

/* Service is for dealing with category related functionalities */
@Injectable()
export class CategoryService {
 
    constructor(private apiService: ApiService){}

    /*  To fetch categories */
    getAllCategories():Observable<any>{
      return  this.apiService.getCategoriesCall();
    }

    /* Get category by id */
    getCategoryById(){

    }
}