import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  addedToCart: boolean = false;

  boolVar: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.boolVar = true;
  }

  getProduct(): void {
    const productCode = Number(this.route.snapshot.paramMap.get('productCode'));
    this.productService.getProduct(productCode)
      .subscribe(p => this.product = p);

  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.addedToCart = true;
  }

  removeFromCart() {
    this.addedToCart = false;
  }
}
