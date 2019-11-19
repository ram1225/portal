interface ROUTE {
    icon?: string;
    route?: string;
    title?: string;
  }
  export class ShopRoutes {
    /* below is for side navigation bar for mobile and tablet devices */
    public ShopSideNavRoutes: ROUTE[] = [
      {
        icon: "access_time",
        route: "products",
        title: "Products"
      }
   
    ];
    public Cart: ROUTE = 
      {
        icon: "shopping_cart",
        route: "products/cart",
        title: "Cart"
      } ;
    
    public Role: ROUTE={
        icon: "person",
        title: "PROFILE"
    }
    public Help: ROUTE = {
        icon: "help",
        title: "HELP"
    };
    public LangOption: any = {
      icon: "language",
      title: "Language"
    };
    public Language: ROUTE = {
      icon: "language",
      title: "LANGUAGE"
    };

    /* add new tabs along with routes in below array */
    public ShopMainComponents: ROUTE[] = [
      {
        route: "products/all-products",
        title: "Products"
      }
    ];
  }
  