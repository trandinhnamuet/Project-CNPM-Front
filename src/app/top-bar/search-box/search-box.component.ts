import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  providers: [ProductService],
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {

  searchingWord: string;
  listProduct: Product[] = [];
  searchResult: Product[];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.listProduct = [];
    this.productService.getProducts().subscribe( product =>
      {
        this.listProduct = product;
      });
  }

  search(searchingWord: string) {
    this.searchResult = [];

    this.listProduct.forEach(i => {
      if (i.name.toLocaleLowerCase().includes(searchingWord.toLocaleLowerCase  ())) {
        this.searchResult.push(i);
      }


      /*if(i.Name.toLocaleLowerCase().includes(searchingWord. toLocaleLowerCase())) {
        this.searchResult.push(i);
      }*/
    });
  }
}
