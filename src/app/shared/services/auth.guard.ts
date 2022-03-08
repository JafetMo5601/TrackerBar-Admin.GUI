import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthGardService } from './auth-gard.service';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authGuardService: AuthGardService,
    private router: Router
  ) {}
  
  canActivate(): boolean {
    if (!this.authGuardService.getToken()) {
      this.router.navigateByUrl("/auth/login");
    }
    return this.authGuardService.getToken();
  }
  
}
