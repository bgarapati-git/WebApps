import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessageComponent} from './message/message.component';
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header/header.component';
import { MobileDetailComponent } from './mobiles/mobile-detail/mobile-detail.component';
import { MobilesListComponent } from './mobiles/mobiles-list/mobiles-list.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ElementHighlightDirective } from './shared/elementHighlight.attribute';
import { ListItemHighlightDirective } from './shared/list-item-highlight.directive';
import { ShoppingCartService } from './shoppingcart/shopping-cart.service';
import { ShoppingCartComponent } from './shoppingcart/shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AppRoutingModule } from './app-routing.module';
import { MobileStartComponent } from './mobiles/mobile-start/mobile-start.component';
import { ShoppingCartStartComponent } from './shoppingcart/shopping-cart-start/shopping-cart-start.component';
import { MobileEditComponent } from './mobiles/mobile-edit/mobile-edit.component';
import { MobileService } from "./mobiles/mobile.service";
import { MobileAddComponent } from './mobiles/mobile-add/mobile-add.component';



@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessagesComponent,
    HeaderComponent,
    MobileDetailComponent,
    MobilesListComponent,
    MobilesComponent,
    ElementHighlightDirective,
    ListItemHighlightDirective,
    ShoppingCartComponent,
    HomeComponent,
    AccessoriesComponent,
    MobileStartComponent,
    ShoppingCartStartComponent,
    MobileEditComponent,
    MobileAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MobileService,ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
