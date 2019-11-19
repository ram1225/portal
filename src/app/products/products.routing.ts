import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const ProductRoutes: Routes = [
  {
    path: "products",
    children: [
      {
        path: "",
        redirectTo: "all-products",
        pathMatch: "full"
      },
      {
        path: "all-products",
        component: ProductListComponent
      },
      {
        path: "checkout",
        component: CheckoutComponent
	  },
	  {
        path: "cart",
        component: CartComponent
      },
      {
        path: ":id",
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  }
];
