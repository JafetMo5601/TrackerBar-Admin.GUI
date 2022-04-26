import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces/user-profile';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const USER_ID = 'user-id'
const USER_NAME = 'username'
const USER_FIRST = 'user-first'
const USER_LAST = 'user-last'
const USER_EMAIL = 'user-email'


@Injectable({
  providedIn: 'root'
})
export class PersonalInformationService {

  constructor(private httpClient: HttpClient) {}

  public getUSerInfo(user_id: string): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>(`/api/Auth/user?userId=${user_id}`, httpOptions);
  }

  public updateProfile(
    id: string,
    name: string,
    last: string,
    email: string,
    username: string,
    password: string,
    birthDate: string
  ): Observable<any> {
    return this.httpClient.put<any>(
      '/api/Auth/profile/update', 
      {id, name, last, email, username, password, birthDate},
      httpOptions);
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
