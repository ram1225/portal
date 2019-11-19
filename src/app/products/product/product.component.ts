import { Component, OnInit, Input } from "@angular/core";
import { UtilityService } from "src/app/shared/services/utility.service";
import { Product } from "src/app/models/Product";

@Component({
  selector: "eshop-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input('product') product;
  constructor(private utilityService:UtilityService) {}

  ngOnInit() {}

  addToCart(event,product){
    event.stopPropagation(); // to stop the event to bubble up and to avoid going to details page
    // increase the product count
    let prod: Product = product;
    prod.productQuantity = 1;

    this.utilityService.senduserObject({prod});    
    this.utilityService.notify(prod.productQuantity + " Items","Successfully added to Cart!");
  }
}
