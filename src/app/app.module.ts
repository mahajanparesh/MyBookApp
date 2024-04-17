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
import { SellerModule } from './seller/seller.module';
import { FeatureComponentComponent } from './feature/feature-component/feature-component.component';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './feature/feature.module';
@NgModule({
  declarations: [AppComponent, CartComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BooksModule,
    FormsModule,
    ReactiveFormsModule,
    SellerModule,
    FeatureModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
