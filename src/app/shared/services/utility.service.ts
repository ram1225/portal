import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Subject, Observable } from "rxjs";

/* This is for common functionalities thats why injected into root*/
@Injectable()
export class UtilityService {
  productsList: any;
  cartList = [];
  totalCartItems: number= 0;
  private userActionObject= new Subject<any>();
  public userActionObjectObser$: Observable<string> = this.userActionObject.asObservable();

  constructor(private _snackBar: MatSnackBar) {}

  notify(type, message) {
    this._snackBar.open(message, type, {
      duration: 2000
    });
  }

  public senduserObject(data){
    this.totalCartItems++;
    this.cartList.push(data.prod);
    this.userActionObject.next({data,total:this.totalCartItems});
  }
}
