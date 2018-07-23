import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  clickedEvent: any;

  constructor() {}

  ngOnInit() {
  }

  childEventClicked(event) {
    this.clickedEvent = event;
  }
}
