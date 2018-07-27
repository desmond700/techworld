import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {

  private productUrl = 'http://localhost:3000/api/products/';
  result: any;

  constructor(private _http: HttpClient) { }

  getProductObj(category) {
    return this._http.get( this.productUrl + category );
  }
}
