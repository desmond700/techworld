import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl: any = 'http://localhost:3000/api/';
  user = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.baseUrl}/login`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        if (localStorage.getItem('currentUser')) {
            localStorage.removeItem('currentUser');
        } else {
            localStorage.removeItem('admin');
        }
    }

    setUser(user: any): void {
        this.user.next(user);
    }

    getUser(): any {
        return this.user.asObservable();
    }
}
