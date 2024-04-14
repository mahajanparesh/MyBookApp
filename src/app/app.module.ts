import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CartComponent } from './cart/cart.component';
import { BooksModule } from './books/books.module';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerComponent } from './seller/seller.component';
@NgModule({
  declarations: [AppComponent, CartComponent, AuthComponent, SellerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BooksModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
