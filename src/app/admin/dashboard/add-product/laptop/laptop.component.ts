import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../admin.service';
import { AlertService } from 'src/app/user/alert.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styles: []
})
export class LaptopComponent implements OnInit {

  laptopForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private adminService: AdminService) { }

  ngOnInit() {
    this.laptopForm = this.formBuilder.group({
        name: ['', Validators.required],
        brand: ['', Validators.required],
		manufacturer: ['', Validators.required],
		type: ['', Validators.required],
		img: ['', Validators.required],
		price: ['', Validators.required],
		specs: this.formBuilder.group({
			Screen_size: ['', Validators.required],
            Touch_screen: ['', Validators.required],
			Storage_type: ['', Validators.required],
			Hard_drive_type: ['', Validators.required],
			Hard_drive_capacity: ['', Validators.required],
			Solid_state_drive_capacity: ['', Validators.required],
			Graphics: ['', Validators.required],
			System_memory: ['', Validators.required],
			Processor_speed: ['', Validators.required],
			Processor_model: ['', Validators.required],
			Processor_model_number: ['', Validators.required],
			Operating_system: ['', Validators.required]
		})
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.laptopForm.controls; }
  
  get s() { return (this.laptopForm.get('specs') as FormGroup).controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.laptopForm.invalid) {
        return;
    }
	console.log(this.laptopForm.value);
    this.loading = true;
    this.adminService.addProduct(this.laptopForm.value)
        .pipe(first())
        .subscribe(
            data => {
                //this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }
}
