import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { AuthenticationService } from 'src/app/auth/auth.service';
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

  constructor(private _loadingBar: SlimLoadingBarService,
			  private _router: Router,
		  	  private authenticationService: AuthenticationService) {

	  this._router.events.subscribe((event: Event) => {
		  this.navigationInterceptor(event);
	  });

	  this.authenticationService.getUser().subscribe(
		  res => { this.user = res; }
	  );
	  console.log(this.user);
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
