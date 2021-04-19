import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productline } from './productline';

@Injectable({
  providedIn: 'root'
})
export class ProductlineService {
  urlLink: string;
  constructor(private http: HttpClient) { }

  /*getProductlines(): Observable<Productline[]> {
    return this.http.get<Productline[]>('https://localhost:44361/api/productlines');
  }*/
}

export const ProductlineList: Productline[] = [
  {productLine: 'Quan ao nam', textDescription: 'Quan ao danh cho mua he', imageUrl: ''},
  {productLine: 'Quan ao nu', textDescription: 'Quan ao danh cho mua dong', imageUrl: ''},
  {productLine: 'Phu kien', textDescription: 'Quan ao danh cho the thao', imageUrl: ''},
  {productLine: 'Quan ao tre em', textDescription: 'Quan ao danh cho tre so sinh', imageUrl: ''}
]
