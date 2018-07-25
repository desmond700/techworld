import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private items: any;

  constructor(private _cart: CartService) { }

  ngOnInit() {
    this._cart.getCartItems().subscribe(
      res => { this.items = res; console.log('cart: ' + this.items); },
      err => console.log('error retrieving object: ' + err)
    );
  }

}
