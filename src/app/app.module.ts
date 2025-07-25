import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddToCartBtnComponent } from './ui/add-to-cart-btn/add-to-cart-btn.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsCartComponent,
    CartItemComponent,
    ProductsListComponent,
    AddToCartBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
