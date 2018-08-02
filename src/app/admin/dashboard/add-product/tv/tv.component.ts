import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../admin.service';
import { AlertService } from 'src/app/user/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styles: []
})
export class TvComponent implements OnInit {

  tvForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private adminService: AdminService) { }

  ngOnInit() {
    this.tvForm = this.formBuilder.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
      type: ['', Validators.required],
      img: ['', Validators.required],
      price: ['', Validators.required],
      specs: this.formBuilder.group({
          Part_Number: ['', Validators.required],
          Scanner_Resolution: ['', Validators.required],
          Number_Of_Items: ['', Validators.required],
          Display_Technology: ['', Validators.required],
          Display_Size: ['', Validators.required],
          Display_Type: ['', Validators.required],
          Image_Aspect_Ratio: ['', Validators.required],
          Are_Batteries_Included: ['', Validators.required],
          Batteries_Required: ['', Validators.required],
          Refresh_Rate: ['', Validators.required],
          Includes_Remote: ['', Validators.required],
          Operating_system: ['', Validators.required]
      }),
      bulletpoints: this.formBuilder.group({
        point1: ['', Validators.required],
        point2: ['', Validators.required],
        point3: ['', Validators.required],
        point4: ['', Validators.required],
        point5: ['', Validators.required]
      })
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.tvForm.controls; }

  get s() { return (this.tvForm.get('specs') as FormGroup).controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.tvForm.invalid) {
        return;
    }
    console.log(this.tvForm.value);
    this.loading = true;
    this.adminService.addTv(this.tvForm.value)
        .pipe(first())
        .subscribe(
            data => {
                // this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

}
