
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-bar',
  templateUrl: './suggestion-bar.component.html',
  styleUrls: ['./suggestion-bar.component.css']
})
export class SuggestionBarComponent implements OnInit {

  listProduct: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.listProduct = [];
    this.productService.getProducts().subscribe( product =>
      {
        this.listProduct = product;
      });
  }

}
