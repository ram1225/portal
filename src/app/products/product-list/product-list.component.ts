import { UtilityService } from './../../shared/services/utility.service';
import { Product } from './../../models/Product';
import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
	selector: 'eshop-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	productlist: Product[] = [];
	constructor(private spinner: NgxSpinnerService,
		private productService:ProductService, private utilityService:UtilityService,
		private router: Router) 
	{}

	ngOnInit() {
		this.fetchProducts();
	}

	/* @Author Ramakrishna
	   This method fetch product records by calling product service
	*/
	fetchProducts(){
		this.spinner.show();
		this.productService.getAllProducts()
		.subscribe((data)=>{
			this.parseProductData(data).then((data)=>{
				setTimeout(()=>this.spinner.hide(),1500);// Simulating actual service response delay
			})
		}, (error)=>{
			this.spinner.hide();
		});
	}

	/* Parse the products to product object list */
	parseProductData(data){
		return new Promise((res,rej)=>{
			data.products.forEach(product => {
				let newProduct = new Product(product['id'],product['name'],
				product['category'],product['price'],"This is a test description of the product "+product['name'],
				product['image'], 0);
	
				this.productlist.push(newProduct);
				
			});
			this.utilityService.productsList = this.productlist;
			res();
		});		
	}	

	gotoDetails(product:Product){
		 this.router.navigate(['/products/'+product.productId]);
	}
}