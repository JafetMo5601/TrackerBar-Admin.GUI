import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthGardService } from './auth-gard.service';

@Injectable({
  providedIn: 'root'
})
export class LooggedInGuard implements CanActivate {
  constructor(
    private authGuardService: AuthGardService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authGuardService.getToken()) {
      this.router.navigateByUrl("/home");
    }
    return !this.authGuardService.getToken();
  }  
}
