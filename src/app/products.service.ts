import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productUrl = 'http://localhost:3000/api/products';

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(this.productUrl);
  }
}
