import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/Observable/of';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class ProductViewService {

  private productsUrl = 'http://localhost:3000/api/product/';
  private theBoolean: BehaviorSubject<boolean>;

  constructor(private _http: HttpClient) {
    this.theBoolean = new BehaviorSubject<boolean>(true);
  }

  getproductbyid(id) {
    return this._http.get(this.productsUrl + id);
  }

  isShowCategory(): Observable<boolean> {
    return this.theBoolean.asObservable();
  }
  
  public showCategory(newValue: boolean): void {
    this.theBoolean.next(newValue);
  }
}
