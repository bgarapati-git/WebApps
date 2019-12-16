import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { MobilesComponent } from './mobiles/mobiles.component';
import { HomeComponent } from './home/home.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ShoppingCartComponent } from './shoppingcart/shopping-cart/shopping-cart.component';
import { MobileStartComponent } from './mobiles/mobile-start/mobile-start.component';
import { MobileDetailComponent } from './mobiles/mobile-detail/mobile-detail.component';
import { ShoppingCartStartComponent } from './shoppingcart/shopping-cart-start/shopping-cart-start.component';
import { MobileEditComponent } from './mobiles/mobile-edit/mobile-edit.component';
import { MobileAddComponent } from './mobiles/mobile-add/mobile-add.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'mobiles', component: MobilesComponent, children: [
        {path: '', component: MobileStartComponent},
        {path: 'add', component: MobileAddComponent},   
        {path: ':id', component: MobileDetailComponent },          
        {path: ':id/edit', component: MobileEditComponent},
        {path: '**', redirectTo: '/home', pathMatch: 'full'}        

    ]},
    {path: 'accessories', component: AccessoriesComponent},
    {path: 'shoppingcart', component: ShoppingCartComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule{

}