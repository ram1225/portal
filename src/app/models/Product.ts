export class Product {
  productId: number;
  productName: string;
  productCategory: string;
  productPrice: number;
  productDescription: string;
  productImageUrl: string;
  productQuantity: number;

  constructor( productId, productName, productCategory, productPrice, 
    productDescription,productImageUrl,productQuantity)
    {
      this.productId = productId;
      this.productName = productName;
      this.productCategory = productCategory;
      this.productPrice = productPrice;
      this.productDescription = productDescription;
      this.productImageUrl = productImageUrl;
      this.productQuantity = productQuantity;
  }
}
