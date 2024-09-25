import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');  // Check if token exists
    if (token) {
      return true;  // Allow access if token exists
    } else {
      this.router.navigate(['/signup-login']);  // Redirect to login/signup
      return false;
    }
  }
}