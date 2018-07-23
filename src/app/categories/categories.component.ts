import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Output() productType = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  productTypeOutput(type) {
    this.productType.emit(type);
  }

}
