import { ProductlineService } from './../productline.service';

import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-bar',
  templateUrl: './suggestion-bar.component.html',
  styleUrls: ['./suggestion-bar.component.css']
})
export class SuggestionBarComponent implements OnInit, OnChanges {

  listProduct: Product[] = [];
  fil: string;
  i: number = 0;

  constructor(
    private productService: ProductService,
    private productlineService: ProductlineService
    ) { }

  ngOnInit(): void {
    this.getProducts();
    this.fil = this.productlineService.filting;
  }

  ngOnChanges(): void {
    if (this.productlineService.filting) {
      this.filteringProduct();
    }
  }

  getProducts() {
    this.listProduct = [];
    this.productService.getProducts().subscribe( product =>
      {
        this.listProduct = product;

        for (let entry of this.listProduct) {
          if (entry.name.length > 20) {
            entry.name = entry.name.substring(0, 22) + " ...";
          }
        }
      });
  }

  filteringProduct() {
    this.i = 0;
    for (this.i = this.listProduct.length; this.i >= 0; this.i--) {
      if (this.listProduct[this.i].productline == this.fil) {
        this.listProduct.slice(this.i, 1);
      }
    }
  }

}
