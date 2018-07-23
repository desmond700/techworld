import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductViewService } from '../product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
	
  productID: String;
  product: any;

  constructor(private route: ActivatedRoute, private _product: ProductViewService) { 
  }

  ngOnInit() {
	  this.route.params.subscribe( params => {this.productID = params;});
	  
	  this._product.getproductbyid(this.productID.id).subscribe(
			res => {this.product = res;},
			err => console.log("error fetch json data.");
	  );
  }
  
  getProduct(id){
	  this._product.getproductbyid(id).subscribe(
			res => {this.product = res;},
			err => console.log("error fetch json data.")
	  );
  }
  
}
