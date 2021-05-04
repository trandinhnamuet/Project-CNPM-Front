import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    console.log('runned get');
    return this.http.get<Customer[]>('https://localhost:44361/api/customers');
  }

  postCustomer(newCustomer: Customer): Observable<Customer> {
    console.log('runned post');
    return this.http.post<Customer>('https://localhost:44361/api/customers', newCustomer);
  }
}
