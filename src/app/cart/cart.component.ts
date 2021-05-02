import { OrderService } from './../order.service';

import { CustomerService } from './../customer.service';
import { ProductService } from './../product.service';
import { Payment } from './../payment';
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
  customerList: Customer[] = [];
  orderList: Order[] = [];
  totalPrice;
  customer: Customer;
  order: Order;
  payment: Payment;

  customerName : string;
  customerAddress : string;
  phoneNumber : number;
  dateOfBirth : string;
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private customerService: CustomerService,
    private orderService: OrderService
    ) { }

  ngOnInit(): void {
    this.productsInCart = this.cartService.items;
    this.totalPrice = this.cartService.totalPrice;

    this.createTestCart();
  }

  buyNow(customerName: string, customerAddress: string, phoneNumber: number) {
    if (!this.customerExisted(customerName, phoneNumber)) {
      this.customer = {
        customerCode: this.getNewCustomerCode(),
        name: customerName,
        dateOfBirth: new Date("2021-01-01"),
        phoneNumber: phoneNumber,
        address: customerAddress,
        purchaseNumber: 1
    }
    }
    this.order = {
      OrderCode: this.getNewOrderCode(),
      CustomerCode: this.customer.customerCode,
      ProductCode: 123,
      QuantityOrdered: 2,
      OrderDate: new Date(this.today()),
      RequiredDate: new Date("2050-01-01"),
      ShippedDate: new Date("2050-01-01"),
      Status: "Not Shipped"
    }
    /*this.payment = {
      PaymentCode: string;
      OrderCode: string;
      PaymentDate: Date;
      Amount: number;
      PaymentType: string;
    }*/
    this.cartService.buyNow(this.customer, this.order);
  }

  customerExisted(customerName: string, phoneNumber: number): boolean{
    this.customerService.getCustomers().subscribe( customer =>
      {
        this.customerList = customer;
      });
      this.customerList.forEach(p =>
      {
        if(p.name == customerName && p.phoneNumber == phoneNumber) {
          this.customer = p;
          return true;
        }
      });
      return false;
  }

  today(): Date{
    let today = new Date();
    console.log("tada" + today);
    return today;
  }

  getNewOrderCode(): number {
    this.orderService.getOrders().subscribe(order =>
      {
        this.orderList = order;
      })
      return this.orderList.length + 1;
  }

  getNewCustomerCode(): number {
    return this.customerList.length + 1;
  }
  createTestCart(){
    this.productService.getProducts().subscribe(p =>
      {
        //this.productsInCart = p;
        this.productsInCart.push(p[Math.floor(Math.random() * (12))]);
        this.productsInCart.push(p[Math.floor(Math.random() * (12))]);
      });
  }
}
