import { Component, OnInit } from '@angular/core';
import { ProductlineList, ProductlineService } from '../productline.service';
import { Productline } from '../productline';
@Component({
  selector: 'app-option-bar',
  templateUrl: './option-bar.component.html',
  styleUrls: ['./option-bar.component.css']
})
export class OptionBarComponent implements OnInit {
  productlineList: Productline[] = [];
  constructor(private productlineService: ProductlineService) { }

  ngOnInit(): void {
    this.productlineList = ProductlineList;
  }

}
