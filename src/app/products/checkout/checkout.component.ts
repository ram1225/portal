import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor( private utilityService:UtilityService,private router: Router) { }

  ngOnInit() {
   let items = this.utilityService.totalCartItems;
   if(items<=0){
    this.router.navigate(['/products']);
   }
  }

}
