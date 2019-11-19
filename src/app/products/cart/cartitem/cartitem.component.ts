import { UtilityService } from "src/app/shared/services/utility.service";
import { Component, OnInit, Input } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Product } from "src/app/models/Product";

@Component({
  selector: "cart-item",
  templateUrl: "./cartitem.component.html",
  styleUrls: ["./cartitem.component.scss"]
})
export class CartItemComponent implements OnInit {
@Input('Product') product;
  constructor() {}

  ngOnInit() {}

  deleteToCart(event,product){
      
  }
}
