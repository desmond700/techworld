import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { ProductViewService } from './product-view.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductsPageComponent } from './products-page/products-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent,
    children: [
      {
        path: ':category',
        component: ProductListComponent,
        children: [
          {
            path: 'view/:id',
            component: ProductViewComponent
          }
        ]
      },
    ]
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductListComponent,
    ProductViewComponent,
    CategoriesComponent,
    CategoryProductsComponent,
    DropdownDirective,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
SlimLoadingBarModule
  ],
  providers: [
    CartService,
    ProductViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
