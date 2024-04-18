import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  async canActivate() {
    await this.authService.onInitAuthChangeListener();
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      alert('Your are not authorized to access this page');
      this.router.navigate(['']);
      return false;
    }
  }
}
// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
