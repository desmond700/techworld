import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
		
  constructor(private _http: HttpClient) { }

  getCartItems() {
    return this._http.get('http://localhost:3000/api/cart');
  }
}
