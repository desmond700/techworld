import { Component, OnInit, Input } from '@angular/core';
import { CategoryProductsService } from './category-products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  products: any;
  type: any;
  category: any;

  constructor(private _products: CategoryProductsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Get route parameter
    this.route.params.subscribe(params => {
      this.type = params['category'];

      // Get product object
      this._products.getProductObj(this.type).subscribe(
        res => { this.products = res; console.log('response: ' + res); },
        err => console.log('error retrieving object: ' + err)
      );
    });
  }
}
