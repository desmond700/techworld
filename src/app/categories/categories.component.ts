import { Component, OnInit, EventEmitter, Output, HostBinding } from '@angular/core';
import { CategoryProductsService } from '../category-products/category-products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @HostBinding('class.is-open')
  isOpen = false;
  
  constructor(private _products: CategoryProductsService) { }

  ngOnInit() {
    this._products.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }
  

}
