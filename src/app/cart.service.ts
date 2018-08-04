import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl: String = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) { }

  getCartItems(): any {
    return this._http.get(`${this.baseUrl}/cart`);
  }

  addToCart(obj: any): any {
    return this._http.post(`${this.baseUrl}/cart/item`, obj);
  }

  removeCartItem(id: any): any {
    return this._http.delete(`${this.baseUrl}/cart/item/${id}`);
  }

}
