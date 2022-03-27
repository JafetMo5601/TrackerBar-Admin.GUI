import { Injectable } from '@angular/core';


const USER_NAME = 'username'
const USER_FIRST = 'user-first'
const USER_LAST = 'user-last'
const USER_EMAIL = 'user-email'


@Injectable({
  providedIn: 'root'
})
export class PersonalInformationService {
    public getFullName(): string {
      return localStorage.getItem(USER_FIRST) + ' ' + localStorage.getItem(USER_LAST)
    }

    public savePersonalInfo(username: string, email: string, first: string, last: string): void {
      localStorage.removeItem(USER_NAME);
      localStorage.removeItem(USER_FIRST);
      localStorage.removeItem(USER_LAST);
      localStorage.removeItem(USER_EMAIL);
      
      localStorage.setItem(USER_NAME, username);
      localStorage.setItem(USER_FIRST, first);
      localStorage.setItem(USER_LAST, last);
      localStorage.setItem(USER_EMAIL, email);
    }
}
