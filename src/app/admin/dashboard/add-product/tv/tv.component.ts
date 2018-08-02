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
          Screen_Technology: ['', Validators.required],
          WiFi: ['', Validators.required],
          Speakers: ['', Validators.required],
          Panel_Type: ['', Validators.required],
          Display_Size: ['', Validators.required],
          Headphone_Jack: ['', Validators.required],
          Image_Aspect_Ratio: ['', Validators.required],
          Display_Resolution: ['', Validators.required],
          VGA_Port: ['', Validators.required],
          Refresh_Rate: ['', Validators.required],
          Includes_Remote: ['', Validators.required],
          ThreeD_Ready: ['', Validators.required]
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

  get b() { return (this.tvForm.get('bulletpoints') as FormGroup).controls; }

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
