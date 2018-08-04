import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductViewService } from '../product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  productID: any;
  product: any;
  itemToCart: any = {
    name: '',
    manufacturer: '',
    model: '',
    type: '',
    img: '',
    price: '',
    quantity: ''
  };

  constructor(private route: ActivatedRoute, private _product: ProductViewService) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => { this.productID = params; });

    this._product.getproductbyid( this.productID.id ).subscribe(
      res => {
    this.product = res;

    this.itemToCart.name  = this.product.name;
    this.itemToCart.manufacturer = this.product.manufacturer;
    this.itemToCart.model = this.product.model;
    this.itemToCart.type  = this.product.type;
    this.itemToCart.img   = this.product.img;
    this.itemToCart.price = this.product.price;

    this._product.setProductInfo(this.itemToCart);
    },
      err => console.log( 'error fetch json data.' )
    );
    this._product.showCategory(false);

  }

  getProduct(id) {
    this._product.getproductbyid(id).subscribe(
      res => { this.product = res; },
      err => console.log('error fetch json data.')
    );
  }

}
