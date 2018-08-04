import { Component, TemplateRef } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NavigationCancel,
	Event,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
	userType: any;
	cartItemCount: number;
  modalRef: BsModalRef;

  constructor(private _loadingBar: SlimLoadingBarService,
							private _router: Router,
							private _cartService: CartService,
							private modalService: BsModalService,
							private authenticationService: AuthenticationService) {

	  this._router.events.subscribe((event: Event) => {
		  this.navigationInterceptor(event);
	  });

	  this.authenticationService.getUser().subscribe(
		  res => {
			  this.user = res;
			  this.userType = localStorage.getItem('userType');
			  console.log('user: ' + this.user + '\nuserType: ' + this.userType);
			}
	  );
		
		this._cartService.getCartItems().subscribe(
			res => this.cartItemCount = res.length
		);
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'maxwidth'}); // {3}
  }

  logout() {
	  this.authenticationService.logout();
	  
	  this._router.navigate(['/']);
  }

  private navigationInterceptor(event: Event): void {
	  if (event instanceof NavigationStart) {
		  this._loadingBar.start();
	  }
	  if (event instanceof NavigationEnd) {
		  this._loadingBar.complete();
	  }
	  if (event instanceof NavigationCancel) {
		  this._loadingBar.stop();
	  }
	  if (event instanceof NavigationError) {
		  this._loadingBar.stop();
	  }
  }
}
