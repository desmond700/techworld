import { Component, OnInit } from '@angular/core';
import { ProductViewService } from '../product-view.service';
import { CartService } from '../cart.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-view-sidebar',
  templateUrl: './product-view-sidebar.component.html',
  styleUrls: ['./product-view-sidebar.component.css']
})
export class ProductViewSidebarComponent implements OnInit {

  productInfo: any;
  quantityVal: any;

  constructor(private _product: ProductViewService,
              private router: Router,
              private _cart: CartService) { }

  ngOnInit() {
    this._product.getProductInfo().subscribe(res => { this.productInfo = res; });
  }

  onSubmit() {
    this.productInfo.quantity = this.quantityVal;
    this._cart.addToCart(this.productInfo).pipe(first()).subscribe(
              () => {
                  // this.alertService.success('Registration successful', true);
                  this.router.navigate(['/cart']);
              },
              error => {
                  // this.alertService.error(error);
                  // this.loading = false;
              });
  }

  quantityChange(event: any): void {
    this.quantityVal = event.target.value;
    console.log(this.quantityVal);
  }

}
