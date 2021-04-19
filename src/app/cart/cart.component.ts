import { Order } from './../order';
import { Customer } from './../customer';
import { Product } from './../product';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsInCart: Product[] = [];
  totalPrice;
  customer: Customer;
  order: Order;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productsInCart = this.cartService.items;
    this.totalPrice = this.cartService.totalPrice;
  }

  buyNow(customerName: string, customerAddress: string, phoneNumber: number) {
    this.customer = {
      customerCode: 2002,
      name: customerName,
      dateOfBirth: new Date("2021-01-01"),
      phoneNumber: phoneNumber,
      address: customerAddress,
      purchaseNumber: 1
    }
    this.order = {
      OrderCode: 11,
      CustomerCode: 2002,
      ProductCode: 123,
      QuantityOrdered: 2,
      OrderDate: new Date("2050-01-01"),
      RequiredDate: new Date("2050-01-01"),
      ShippedDate: new Date("2050-01-01"),
      Status: "Not Shipped"
    }

    this.cartService.buyNow(this.customer, this.order);
  }
}
