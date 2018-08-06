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
import { CategoryProductsService } from './category-products/category-products.service';
import { ProductViewSidebarComponent } from './product-view-sidebar/product-view-sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin/login/login.component';
import { AdminService } from './admin/admin.service';
import { AdminAuthGuard } from './admin/admin-auth.guard';
import { ListCustomersComponent } from './admin/dashboard/list-customers.component';
import { AddProductComponent } from './admin/dashboard/add-product/add-product.component';
import { ListProductsComponent } from './admin/dashboard/list-products/list-products.component';
import { ProductsComponent } from './admin/dashboard/list-products/products.component';
import { LaptopComponent } from './admin/dashboard/add-product/laptop/laptop.component';
import { CameraComponent } from './admin/dashboard/add-product/camera/camera.component';
import { TvComponent } from './admin/dashboard/add-product/tv/tv.component';
import { CellPhoneComponent } from './admin/dashboard/add-product/cell-phone/cell-phone.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap';
import { EditProductComponent } from './admin/dashboard/edit-product/edit-product.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
	pathMatch: 'full'
    // canActivate: [AuthGuard]
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
    path: 'store/product/:category',
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
  },
  {
    path: 'admin',
    children: [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: AdminLoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AdminAuthGuard],
        children: [
          {
            path: 'customers',
            component: ListCustomersComponent,
          },
          {
            path: 'add-products',
            component: AddProductComponent,
            children: [
              {
                path: 'laptop',
                component: LaptopComponent
              },
              {
                path: 'tv',
                component: TvComponent
              },
              {
                path: 'camera',
                component: CameraComponent
              },
              {
                path: 'cell phone',
                component: CellPhoneComponent
              }
            ]
          },
          {
            path: 'list-products',
            children: [
			  {
                path: '',
                component: ListProductsComponent
              },
			  {
                path: 'edit/:id',
                component: EditProductComponent
              }
            ]
          }
        ]
      }
    ]
  },
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
    RegisterComponent,
    ProductViewSidebarComponent,
    DashboardComponent,
    AdminLoginComponent,
    ListCustomersComponent,
    AddProductComponent,
    ListProductsComponent,
    ProductsComponent,
    LaptopComponent,
    CameraComponent,
    TvComponent,
    CellPhoneComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
	SlimLoadingBarModule,
	ReactiveFormsModule,
	FormsModule,
	BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
	CollapseModule
  ],
  providers: [
    CartService,
    ProductViewService,
    AuthGuard,
    AdminAuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    CategoryProductsService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
