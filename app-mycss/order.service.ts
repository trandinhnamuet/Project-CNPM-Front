import { Observable } from 'rxjs';
import { Order } from './order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  postOrder(newOrder: Order): Observable<Order> {
    return this.http.post<Order>('https://localhost:44361/api/orders', newOrder);
  }

  getOrders(): Observable<Order[]> {
    console.log('runned get');
    return this.http.get<Order[]>('https://localhost:44361/api/customers');
  }
}
