import { UtilityService } from 'src/app/shared/services/utility.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalCartItems: number=-1;
  cartlist: Product[]= [];
  constructor(
    private spinner: NgxSpinnerService,
    private utilityService:UtilityService, 
    private router: Router) {}

  ngOnInit() {
    this.spinner.show();
    this.checkCartDetails();
    this.spinner.hide();
  }

  /* fetching and checking cart details, here basically we should use state management */
  checkCartDetails(): any {
    this.totalCartItems = this.utilityService.totalCartItems;
    this.cartlist = this.utilityService.cartList;
  }

  addToCart(event,product){
    this.router.navigate(['/products/checkout']);
  }
}
