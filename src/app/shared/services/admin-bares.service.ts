import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservations } from '../interfaces/reservations';
import { RestaurantById } from '../interfaces/restaurant-by-id';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminBaresService {

  constructor(private httpClient: HttpClient) {}

  getYourBares(userId: string): Observable<any>{
    return this.httpClient.get(`/api/Restaurant/by-owner?userId=${userId}`, httpOptions)
  }

  addBar(
    restaurantName: string, 
    peopleQty: string, 
    tableQty: string, 
    employeeQty: string,
    phone: string, 
    direction: string,
    userId: string ): Observable<any>{
    return this.httpClient.post('/api/Restaurant/create', 
    {restaurantName, peopleQty, tableQty, employeeQty, phone, direction, userId},
    httpOptions)
  }

  getBarById(userId: string, restaurantId: number): Observable<RestaurantById> {
    return this.httpClient.get<RestaurantById>(`/api/Restaurant/by-id?UserId=${userId}&RestaurantId=${restaurantId}`, httpOptions)
  }

  updateBar(
    restaurantId: number, 
    name: string, 
    peopleQty: number, 
    tableQty: number,
    employeeQty: number,
    phone: string,
    userId: string,
    direction: string
  ): Observable<any> {
      return this.httpClient.put(
        '/api/Restaurant/update',
        {restaurantId, name, peopleQty, tableQty, employeeQty, phone, userId, direction},
        httpOptions
      );
    }

  deleteBar(restaurantId: number, userId: string): Observable<any>{
    return this.httpClient.delete('/api/Restaurant/delete', 
    {body: {restaurantId, userId}})
  }

  getReservationsByBarId(restaurantId: number):Observable<Array<Reservations>> {
    return this.httpClient.get<Array<Reservations>>(`/api/Restaurant/reservations?RestaurantId=${restaurantId}`, httpOptions)
  }

  getRestaurantsByOwner(userId: string): Observable<Array<RestaurantById>> {
    return this.httpClient.get<Array<RestaurantById>>(`/api/Restaurant/by-owner?userId=${userId}`, httpOptions);
  }
}
