import { Component, OnInit } from '@angular/core';
import { ProductViewService } from '../product-view.service';

@Component({
  selector: 'app-product-view-sidebar',
  templateUrl: './product-view-sidebar.component.html',
  styleUrls: ['./product-view-sidebar.component.css']
})
export class ProductViewSidebarComponent implements OnInit {

  constructor(private _product: ProductViewService) { }

  ngOnInit() {
    this._product.getProductInfo().subscribe(res => console.log('product view: ' + res));
  }

}
