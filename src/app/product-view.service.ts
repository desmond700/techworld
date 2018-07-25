import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductViewService {

  private productsUrl = 'http://localhost:3000/api/products/';

  constructor(private _http: HttpClient) { }

  getproductbyid(id) {
    return this._http.get(this.productsUrl + id);
  }
}
