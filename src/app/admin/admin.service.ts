import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Laptop } from './class/laptop';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:3000/api';
  result: any;

  constructor(private _http: HttpClient) { }

  getProductObj(category) {
    return this._http.get(`${this.baseUrl}/products/` + category );
  }

  addProduct(laptop: Laptop) {
      return this._http.post(`${this.baseUrl}/product/laptop`, laptop);
  }

  getUsers() {
    return this._http.get(`${this.baseUrl}/users/`);
  }

  removeUsers(id: any) {
    return this._http.delete(`${this.baseUrl}/users/`, id);
  }

}
