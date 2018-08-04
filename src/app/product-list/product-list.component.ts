import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { ProductViewService } from '../product-view.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    show: any;

    constructor(private _product: ProductViewService, private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this._product.isShowCategory().subscribe( res => {
                this.show = res;
                this.cdr.detectChanges();
            }
        );
    }
}
