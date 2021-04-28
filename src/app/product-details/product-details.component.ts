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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getProduct();
    console.log('12312ase');
  }

  getProduct(): void {
    const productCode = Number(this.route.snapshot.paramMap.get('productCode'));
    this.productService.getProduct(productCode)
      .subscribe(hero => this.product = hero);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.addedToCart = true;
  }

  removeFromCart() {
    this.addedToCart = false;
  }
}
