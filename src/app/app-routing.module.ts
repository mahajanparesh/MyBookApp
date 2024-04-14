import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { SellerComponent } from './seller/seller.component';
import { SellerGuard } from './seller/seller.guard';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
  { path: 'seller', component: SellerComponent, canActivate: [SellerGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
