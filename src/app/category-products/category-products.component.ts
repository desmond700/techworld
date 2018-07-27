import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CategoryProductsService } from './category-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductViewService } from '../product-view.service';

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
              private _product: ProductViewService,
              private route: ActivatedRoute,
              private router: Router) { }

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

  this._product.showCategory(true);
  }

  productView(category) {
    this.router.navigate(['view', category], { relativeTo: this.route });
  }
}
