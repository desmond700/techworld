import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styles: []
})
export class ListProductsComponent implements OnInit {

  productObj: any;
  constructor(private _adminService: AdminService) { }

  ngOnInit() {
	  this._adminService.getProducts().subscribe( res => {
			this.productObj = res;
		  }
	  );
  }
  
  deleteItem(id: any): void {
	  this._adminService.removeProduct(id).subscribe(
			res => {
				this._adminService.getProducts().subscribe( 
					res => {this.productObj = res;}
				);
			}
	  );
  }

}
