import { OrderService } from './../order.service';

import { CustomerService } from './../customer.service';
import { ProductService } from './../product.service';
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

  leng: number;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private customerService: CustomerService,
    private orderService: OrderService
    ) {}

  ngOnInit(): void {
    this.productsInCart = this.cartService.items;
    this.totalPrice = this.cartService.totalPrice;

    this.clearAll();
    //this.createTestCart();
  }

  buyNow() {
    if (this.customerName == null || this.customerAddress == null || this.phoneNumber == null || this.dateOfBirth == null) {
      this.nothingTyped = true;
      return;
    }
    this.customer = {
      customerCode: this.getNewCustomerCode(),
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
    /*this.orderService.getOrders().subscribe(order =>
      {
        this.orderList = order;
      })*/
      return Math.floor(Math.random() * (999999 - 10 + 1) + 10);
  }

  getNewCustomerCode() {
    /*this.customerService.getCustomers().subscribe(c => {
      this.leng = c.length + 1;
    });*/
    //return this.leng;  //this.leng = 0 do bat dong bo => khong the dung
    return Math.floor(Math.random() * (999999 - 10 + 1) + 10);
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
