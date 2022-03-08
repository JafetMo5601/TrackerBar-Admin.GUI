import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService {

  getToken() {
    return !!localStorage.getItem('auth-token');
  }
}
