import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Router ,ActivatedRoute, Params} from "@angular/router";
import { Subscription } from 'rxjs';

import { Mobile } from '../mobile.model';
import { MobileService } from "../mobile.service";
import { ShoppingCartService } from '../../shoppingcart/shopping-cart.service';


@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.css'],
})
export class MobileDetailComponent implements OnInit, OnDestroy{
  //@Input() selectedMobile: Mobile;
  selectedMobile: Mobile;
  id: number;
  private addToCartSub: Subscription;


  constructor(
    private mobileService: MobileService, 
    private shoppingcartService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']
          this.selectedMobile = this.mobileService.getMobile(this.id);
        }
      )

      //Test rxjs Subject & Subscription
      this.addToCartSub = this.shoppingcartService.addToCart
        .subscribe ( 
          (addedMobile: Mobile) => {console.log('added to cart');}
        );
       // end test 
  }

  addMobiletoCart(selectedMobile: Mobile){
    this.shoppingcartService.addMobileToCart(selectedMobile);
  }

  editMobile(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  goBack(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.addToCartSub.unsubscribe();
  }

}
