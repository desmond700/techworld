import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
	
  constructor(private router: Router, private _route: ActivatedRoute) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('admin')) {
		// logged in so return true
		return true;
	}
	console.log(this._route);
	// not logged in so redirect to login page with the return url
	this.router.navigate(['admin', 'login'], {relativeTo: this._route});
	return false;
  }
}
