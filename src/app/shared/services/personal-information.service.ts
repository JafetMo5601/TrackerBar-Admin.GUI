import { Injectable } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';


const USER_ID = 'user-id'
const USER_NAME = 'username'
const USER_FIRST = 'user-first'
const USER_LAST = 'user-last'
const USER_EMAIL = 'user-email'


@Injectable({
  providedIn: 'root'
})
export class PersonalInformationService {

  info: Array<UserProfile> = [
    {id: '111111111', name: 'Jafet', last: 'Mora Ugalde', email: 'jafet@gmail.com', username: 'jafet.mora', password: 'Test1', birthday: '2008-04-10T06:30:00'}
  ]

  public getUSerInfo(user_id: string): UserProfile | null {
    return this.info.find(user => user.id == user_id) ?? null;
  }

  public getFullName(): string {
    return localStorage.getItem(USER_FIRST) + ' ' + localStorage.getItem(USER_LAST)
  }

  public savePersonalInfo(id: number, username: string, email: string, first: string, last: string): void {
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_NAME);
    localStorage.removeItem(USER_FIRST);
    localStorage.removeItem(USER_LAST);
    localStorage.removeItem(USER_EMAIL);
    
    localStorage.setItem(USER_ID, id.toString());
    localStorage.setItem(USER_NAME, username);
    localStorage.setItem(USER_FIRST, first);
    localStorage.setItem(USER_LAST, last);
    localStorage.setItem(USER_EMAIL, email);
  }

  public getId(): string | null {
    return localStorage.getItem(USER_ID);
  }
}
