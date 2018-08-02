import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../admin.service';
import { AlertService } from 'src/app/user/alert.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styles: []
})
export class CameraComponent implements OnInit {

  cameraForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private adminService: AdminService) { }

  ngOnInit() {
    this.cameraForm = this.formBuilder.group({
        name: ['', Validators.required],
        manufacturer: ['', Validators.required],
        model: ['', Validators.required],
        type: ['', Validators.required],
        img: ['', Validators.required],
        price: ['', Validators.required],
        specs: this.formBuilder.group({
            WiFi: ['', Validators.required],
            Bluetooth: ['', Validators.required],
            Battery_Type: ['', Validators.required],
            Back_up_Battery: ['', Validators.required],
            Width: ['', Validators.required],
            Height: ['', Validators.required],
            Depth: ['', Validators.required],
            Weight: ['', Validators.required],
            NFC_Enabled: ['', Validators.required],
            Sensor_Type: ['', Validators.required],
            Effective_Pixels: ['', Validators.required],
            Total_Pixels: ['', Validators.required],
            Colour_Filter_System: ['', Validators.required],
            LCD_Size: ['', Validators.required],
            LCD_Resolution: ['', Validators.required]
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
  get f() { return this.cameraForm.controls; }

  get s() { return (this.cameraForm.get('specs') as FormGroup).controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.cameraForm.invalid) {
        return;
    }
  console.log(this.cameraForm.value);
    this.loading = true;
    this.adminService.addCamera(this.cameraForm.value)
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
