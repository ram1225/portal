import { ProductService } from "./../../shared/services/product.service";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import { ShopRoutes } from "src/app/models/ShopModel";
import { UtilityService } from "src/app/shared/services/utility.service";

@Component({
  selector: "eshop-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent extends ShopRoutes implements OnInit {
  imagePath = "./../../../assets/images/eshop.png";
  AppTitle = "Portal";
  cartItems = -1; // -1 indicates we shouldnot show badge
  constructor(
    public authService: AuthService,
    public productService: ProductService,
    private utilityService: UtilityService
  ) {
    super();
    /* subscribe to user data observable */
    this.utilityService.userActionObjectObser$.subscribe((data) => {
       this.cartItems = data['total']?data['total']:-1;
    });
  }

  ngOnInit() {}

  /* To logout the user */
  logout() {}

  /* To open contact page */
  openContactPage() {}
}
