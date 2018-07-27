import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {

  private productUrl = 'http://localhost:3000/api/products/';
  @Output() productsObj: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  result: any;
  isOpen = false;
  

  constructor(private _http: HttpClient) { }

  getProductObj(category) {
    return this._http.get( this.productUrl + category );
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
}
