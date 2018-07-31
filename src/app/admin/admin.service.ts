import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Laptop } from './class/laptop';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:3000/api';
  result: any;

  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
    return this._http.post<any>(`${this.baseUrl}/admin/login`, { username: username, password: password })
        .pipe(map(admin => {
            // login successful if there's a jwt token in the response
            if (admin.username !== null) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('admin', admin.username);
            }

            return admin;
        }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('admin');
  }

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
