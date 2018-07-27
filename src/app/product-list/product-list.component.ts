import { Component, OnInit  } from '@angular/core';
import { ProductViewService } from '../product-view.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    show: any;

    constructor(private _product: ProductViewService) {
    }

    ngOnInit() {
        this._product.isShowCategory().subscribe( res => {
                this.show = res;
                // this.cdr.detectChanges();
            }
        );
    }
}
