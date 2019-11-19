
import { ProductRoutes } from "./products.routing";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from "./product/product.component";
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from "./cart/cartitem/cartitem.component";

@NgModule({
	imports: [CommonModule, RouterModule.forChild(ProductRoutes), SharedModule], //CheckoutModule
	declarations: [
        ProductComponent,
		ProductListComponent,
		ProductDetailComponent,
		CheckoutComponent,
		CartComponent,
		CartItemComponent
	],
	exports: [ProductListComponent,ProductDetailComponent]
})
export class ProductModule { }