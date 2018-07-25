import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CategoryProductsService } from '../category-products/category-products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Output() productType = new EventEmitter();

  constructor(private _products: CategoryProductsService) { }

  ngOnInit() {
  }

}
