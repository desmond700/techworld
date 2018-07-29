import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Laptop } from './class/laptop';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private productUrl = 'http://localhost:3000/api';
  result: any;

  constructor(private _http: HttpClient) { }

  getProductObj(category) {
    return this._http.get( `${this.productUrl}/products/` + category );
  }
  
  addProduct(laptop: Laptop) {
      return this._http.post(`${this.productUrl}/product/laptop`, laptop);
  }
}
