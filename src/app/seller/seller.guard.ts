import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SellerGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate() {
    return this.authService.isSeller;
  }
}
// export const sellerGuard: CanActivateFn = (route, state) => {
//   return true;
// };
