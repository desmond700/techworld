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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { AlertService } from './user/alert.service';
import { AuthenticationService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products/:category',
    component: ProductListComponent,
    children: [
    {
        path: '',
        component: CategoryProductsComponent
      },
      {
        path: 'view/:id',
        component: ProductViewComponent
      }
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
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
SlimLoadingBarModule,
ReactiveFormsModule,
FormsModule
  ],
  providers: [
    CartService,
    ProductViewService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
