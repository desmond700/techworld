import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../admin.service';
import { AlertService } from 'src/app/user/alert.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-cell-phone',
  templateUrl: './cell-phone.component.html',
  styles: []
})
export class CellPhoneComponent implements OnInit {

  cellphoneForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private adminService: AdminService) { }

  ngOnInit() {
    this.cellphoneForm = this.formBuilder.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
      type: ['', Validators.required],
      img: ['', Validators.required],
      price: ['', Validators.required],
      specs: this.formBuilder.group({
        Bluetooth: ['', Validators.required],
        Memory_Built_in: ['', Validators.required],
        CPU: ['', Validators.required],
        RAM_Size: ['', Validators.required],
        SIM_Card: ['', Validators.required],
        Battery_Talk_Time: ['', Validators.required],
        Battery_Type: ['', Validators.required],
        Supported_Network_Bands: ['', Validators.required],
        NFC: ['', Validators.required],
        Headphone_Jack: ['', Validators.required],
        Rear_Camera_Resolution: ['', Validators.required],
        Front_Video_Capture_Resolution: ['', Validators.required],
        Camera_Flash: ['', Validators.required],
        Display_Resolution: ['', Validators.required],
        Display_Size: ['', Validators.required],
        Fingerprint_Scanning: ['', Validators.required],
        Operating_system: ['', Validators.required],
        Dimensions_cm: ['', Validators.required],
        Dimensions_in: ['', Validators.required],
        Weight: ['', Validators.required]
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
  get f() { return this.cellphoneForm.controls; }

  get s() { return (this.cellphoneForm.get('specs') as FormGroup).controls; }

  get b() { return (this.cellphoneForm.get('bulletpoints') as FormGroup).controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.cellphoneForm.invalid) {
        return;
    }
  console.log(this.cellphoneForm.value);
    this.loading = true;
    this.adminService.addCellphone(this.cellphoneForm.value)
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
