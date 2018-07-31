import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { AlertService } from '../../user/alert.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styles: []
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private adminService: AdminService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // reset login status
    this.adminService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('username: ' + this.f.username.value + 'password: ' + this.f.password.value);

    console.log('invalid: ' + this.loginForm.invalid);
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.adminService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.authenticationService.setUser(data);
                this.router.navigate(['admin', 'dashboard']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

}
