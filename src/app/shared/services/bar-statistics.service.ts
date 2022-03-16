import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BarStatisticsService {
  constructor(private httpClient: HttpClient) {}

  getTotalTables(restaurant_id: number): Observable<any>{
    return this.httpClient.get(`/api/Table/total?restaurantId=${restaurant_id}`, httpOptions);
  }

  getTotalTablesAvailable(restaurant_id: number): Observable<any>{
    return this.httpClient.get(`/api/Table/total/availables?restaurantId=${restaurant_id}`, httpOptions);
  }

  getTotalPeople(restaurant_id: number): Observable<any>{
    return this.httpClient.get(`/api/Table/people?restaurantId=${restaurant_id}`, httpOptions);
  }

  getTotalSpacesAvailable(restaurant_id: number): Observable<any>{
    return this.httpClient.get(`/api/Table/spaces/availables?restaurantId=${restaurant_id}`, httpOptions);
  }
}
