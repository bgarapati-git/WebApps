import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shoppingcart/shopping-cart.service';
import { Mobile } from "../mobiles/mobile.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Output('electCatSelected') electronicsCategorySelected = new EventEmitter<string>();
  cartItemsCount: number = 0;

  constructor(private shoppingCartServie: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartServie.addToCart
      .subscribe(
        (mobile: Mobile) => {
          this.cartItemsCount = this.shoppingCartServie.getMobileItemsFromCart().length;
        }
      );
  }

  onCategorySelected(category:string){
    //this.electronicsCategorySelected.emit(category);
  }

  ngOnDestroy(){
    this.shoppingCartServie.addToCart.unsubscribe();
  }

}
