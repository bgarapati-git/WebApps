import { Subject } from 'rxjs'
import { Mobile } from "../mobiles/mobile.model";

export class ShoppingCartService{
    mobiles: Mobile[] = [];
    addToCart = new Subject<Mobile>();
    
    constructor(){
        this.mobiles=[];
    }

    addMobileToCart(mobile:Mobile){
        this.mobiles.push(mobile);
        this.addToCart.next(mobile); //rxjs subject (event emitter)
    }

    getMobileItemsFromCart(){
        return this.mobiles.slice();
    }

}