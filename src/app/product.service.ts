import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlLink: string;
  constructor(private http: HttpClient) { }

  getProduct(productCode: number): Observable<Product> {
    this.urlLink = 'https://localhost:44361/api/products/' + productCode;
    return this.http.get<Product>(this.urlLink);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://localhost:44361/api/products');
  }
}
