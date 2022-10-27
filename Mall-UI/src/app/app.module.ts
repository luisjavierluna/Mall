import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { DepartmentsComponent } from './departments/departments/departments.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { ProductsComponent } from './products/products/products.component';
import { CreateDepartmentComponent } from './departments/create-department/create-department.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { NavbarMenusComponent } from './header/navbar-menus/navbar-menus.component';
import { NavbarMegamenusComponent } from './header/navbar-megamenus/navbar-megamenus.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CarouselComponent,
    DepartmentsComponent,
    CategoriesComponent,
    ProductsComponent,
    CreateDepartmentComponent,
    EditDepartmentComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    CreateProductComponent,
    EditProductComponent,
    NavbarMenusComponent,
    NavbarMegamenusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
