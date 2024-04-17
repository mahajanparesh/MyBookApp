import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { SellerComponent } from './seller/seller.component';
import { SellerGuard } from './seller/seller.guard';
import { FeatureComponentComponent } from './feature/feature-component/feature-component.component';
const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
  { path: 'feature', component: FeatureComponentComponent },
  {
    path: 'seller',
    loadChildren: () =>
      import('./seller/seller.module').then((m) => m.SellerModule),
    canActivate: [SellerGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
