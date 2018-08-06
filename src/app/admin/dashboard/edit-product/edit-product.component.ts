import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { AlertService } from 'src/app/user/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styles: []
})
export class EditProductComponent implements OnInit {

  genericForm: FormGroup;
  loading = false;
  submitted = false;
  type: String;
  success: String;
  product: any;
  productID: any;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private _route: ActivatedRoute,
              private _router: Router,
              private _alertService: AlertService,
              private _adminService: AdminService) { }

  ngOnInit() {
    this._route.params.subscribe( params => { this.productID = params; });

	this._adminService.getproductbyid(this.productID.id).subscribe(
			res => {
				this.product = res;
				this.type = this.product.type;
				this.genericForm = this._adminService.getProductFormbuilder(this.product.type);
				this._adminService.setControls(this.genericForm, this.product);
			}
	);
	
	
  }

  // convenience getter for easy access to form fields
  get f() { return this.genericForm.controls; }

  get s() { return (this.genericForm.get('specs') as FormGroup).controls; }

  get b() { return (this.genericForm.get('bulletpoints') as FormGroup).controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.genericForm.invalid) {
        return;
    }
	console.log('submitted');
    this.loading = true;
    this._adminService.updateProduct(this.productID.id, this.genericForm.value)
        .pipe(first())
        .subscribe(
            data => {
				console.log('updated');
                // this.router.navigate([this.returnUrl]);
				this.loading = false;
				this.success = 'Successfully updated.';
            },
            error => {
				console.log('update error');
                this._alertService.error(error);
                this.loading = false;
            });
  }

}
