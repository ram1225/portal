import { Category } from './../../models/Category';
import { CategoryService } from './../../shared/services/category.service';
import { Component, OnInit, Input } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "eshop-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categoriesList:Category[] = [];
  constructor(private spinner: NgxSpinnerService,private categoryService:CategoryService) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories(){
    this.spinner.show();
    this.categoryService.getAllCategories()
    .subscribe((data)=>{
        this.parseCategoryData(data).then((data)=>{
            setTimeout(()=>this.spinner.hide(),1500);// Simulating actual service response delay
        })
    }, (error)=>{
        this.spinner.hide();
    });
  }

  	/* Parse the products to product object list */
	parseCategoryData(data){
		return new Promise((res,rej)=>{
			data.categories.forEach(category => {
                let newCategory = new Category(category['id'], category['name']);
				this.categoriesList.push(newCategory);
			});
			res();
		});		
	}	
}
