import { OrderService } from './order.service';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { Order } from './order';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  totalPrice: number = 0;

  constructor(
    private http: HttpClient,
    private customerService: CustomerService,
    private orderService: OrderService
    ) { }

  addToCart(product: Product) {
    this.items.push(product);
    this.totalPrice += product.price;
  }

  getItems() {
    return this.items;
  }

  buyNow(customer: Customer, order: Order) {
      this.customerService.postCustomer(customer).subscribe();
      this.orderService.postOrder(order).subscribe();
      console.log('addCart to database successed')
      /*this.items.forEach(i => {
        postOrderDetail(i);
      })*/
  }

}
