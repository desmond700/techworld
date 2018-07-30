import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  template: `
    <div class="card" *ngFor="let value of products">
		<img src="{{value.img}}" width="200" />
		<div class="card-body">
		  <h5 class="card-title">{{value.name}}</h5>
		  <p class="card-text">CDN$ {{value.price}}</p>
		  <a [routerLink]="['view',value._id]" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
	{{type}}
  `,
  styles: []
})
export class ProductsComponent implements OnInit {

  products: any;
  type: any;
  category: any;

  constructor(private _products: AdminService,
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

    //this._product.showCategory(true);
  }

  productView(category) {
    this.router.navigate(['view', category], { relativeTo: this.route });
  }

}
