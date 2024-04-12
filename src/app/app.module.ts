import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CartComponent } from './cart/cart.component';
import { BooksModule } from './books/books.module';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [AppComponent, CartComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BooksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
