import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = {
    productCode: null,
    name: null,
    price: null,
    entryDay: null,
    productline: null,
    size: null,
    brand: null,
    imageLink: null,
    quantityInStock: null
  };
  productCode : number;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productCode = Number(this.route.snapshot.paramMap.get('productCode'));
    //this.productService.getProduct(this.productCode).subscribe(p => this.product = p);
    this.productService.getProduct(this.productCode).toPromise().then(p => this.product = p);

    if (!this.cartService.addedToCart.has(this.productCode)) {
      this.cartService.addedToCart.set(this.productCode, false);
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.cartService.addedToCart.set(this.productCode, true);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
    this.cartService.addedToCart.set(this.product.productCode, false);
  }
}
