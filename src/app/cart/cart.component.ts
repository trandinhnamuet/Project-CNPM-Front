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
  order: Order[] = [];
  or: Order;
  newOrderCode: number = this.getNewOrderCode();

  customerName : string;
  customerAddress : string;
  phoneNumber : number;
  dateOfBirth : Date;

  nothingTyped: boolean = false;
  cartSent: boolean = false;
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private customerService: CustomerService,
    private orderService: OrderService
    ) { }

  ngOnInit(): void {
    this.productsInCart = this.cartService.items;
    this.totalPrice = this.cartService.totalPrice;

    this.customerService.getCustomers().subscribe(c => {
      this.customerList = c;
    });
    this.customerList.forEach(c => {
      console.log(c.name);
      console.log("+++++++++++++++++++++++++");
    });
    this.clearAll();
    //this.createTestCart();
  }

  buyNow() {
    if (this.customerName == null || this.customerAddress == null || this.phoneNumber == null || this.dateOfBirth == null) {
      this.nothingTyped = true;
      return;
    }
    console.log(this.getNewCustomerCode());
    this.customer = {
      customerCode: this.getNewCustomerCode() + 1,
      name: this.customerName,
      dateOfBirth: new Date(this.dateOfBirth),
      phoneNumber: this.phoneNumber,
      address: this.customerAddress,
      purchaseNumber: 1
    }
    this.productsInCart.forEach(p => {
      this.or = {
        OrderCode: this.newOrderCode++,
        CustomerCode: this.customer.customerCode,
        ProductCode: p.productCode,
        QuantityOrdered: 1,
        OrderDate: new Date(this.today()),
        RequiredDate: new Date("2050-01-01"),
        ShippedDate: new Date("2050-01-01"),
        Status: "Not Shipped"
      }
      this.order.push(this.or);
    })


    this.cartService.buyNow(this.customer, this.order);
    this.cartSent = true;
    this.clearAll();
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

  clearAll() {
    this.customerAddress = null;
    this.customerName = null;
    this.dateOfBirth = null;
    this.phoneNumber = null;
  }


}
