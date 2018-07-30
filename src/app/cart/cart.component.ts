import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private items: any;

  constructor(private _cart: CartService,
			  private router: Router) { }

  ngOnInit() {
    this._cart.getCartItems().subscribe(
      res => { this.items = res; console.log('cart: ' + this.items ); },
      err => console.log('error retrieving object: ' + err)
    );
  }
  
  getCartItems(){
	  this._cart.getCartItems().subscribe(
      res => { this.items = res; console.log('cart: ' + this.items ); },
      err => console.log('error retrieving object: ' + err)
    );
  }
  
  onDelete(id: any): void {
	  	  
	  this._cart.removeCartItem(id).pipe(first()).subscribe(
              data => {
                  //this.alertService.success('Registration successful', true);
                  this._cart.getCartItems().subscribe(
					 res => { this.items = res; },
					 err => console.log('error retrieving object: ' + err)
				  );
              },
              error => {
                  //this.alertService.error(error);
                  //this.loading = false;
              });
  }

}
