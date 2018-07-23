import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  products: any;
  @Input() type;

  constructor(private _products: ProductsService) { }

  ngOnInit() {
    this._products.getProducts().subscribe(
      res => { this.products = res; },
      err => console.log('error retrieving object: ' + err)
    );
  }

}
