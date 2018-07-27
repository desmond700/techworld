import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class ProductViewService {

  private productsUrl = 'http://localhost:3000/api/product/';
  private theBoolean: BehaviorSubject<boolean>;
  private productInfo: BehaviorSubject<any>;

  constructor(private _http: HttpClient) {
    this.theBoolean = new BehaviorSubject<boolean>(true);
    this.productInfo = new BehaviorSubject<boolean>(null);
  }

  getproductbyid(id) {
    return this._http.get(this.productsUrl + id);
  }

  isShowCategory(): Observable<boolean> {
    return this.theBoolean.asObservable();
  }

  showCategory(newValue: boolean): void {
    this.theBoolean.next(newValue);
  }

  setProductInfo(obj: any): void {
    this.productInfo.next(obj);
  }

  getProductInfo() {
    return this.productInfo.asObservable();
  }
}
