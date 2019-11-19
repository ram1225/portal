import { Product } from './../../models/Product';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";
import { UtilityService } from "src/app/shared/services/utility.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  id: string = undefined;
  nodata = "It looks like there is no product found!";
  nodataExist = false;
  product:Product ;
  constructor(
    private spinner: NgxSpinnerService,
    public activatedRoute: ActivatedRoute,private utilityService:UtilityService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = data["params"]["id"];
      this.spinner.show();
      this.filterData();
    });
  }

  filterData() {
    if (this.id !== undefined && this.utilityService.productsList) {
		
		this.product=this.utilityService.productsList.filter((product)=>{
			return product.productId == this.id;
		})[0];
		this.nodataExist = false;
	}else{
		this.nodataExist = true;
	}
	this.spinner.hide();
  }

  ngOnDestroy() {}
}
