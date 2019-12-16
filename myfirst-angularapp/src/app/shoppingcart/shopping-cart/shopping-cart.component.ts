import { Component, OnInit } from '@angular/core';
import { Mobile } from '../../mobiles/mobile.model';
import { ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Mobile[] = [];

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getMobileItemsFromCart();
  }

}
