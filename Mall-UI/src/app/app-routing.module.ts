import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { CreateDepartmentComponent } from './departments/create-department/create-department.component';
import { DepartmentsComponent } from './departments/departments/departments.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductsComponent } from './products/products/products.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'departments/create', component: CreateDepartmentComponent},
  {path: 'departments/edit/:id', component: EditDepartmentComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/create', component: CreateCategoryComponent},
  {path: 'categories/edit/:id', component: EditCategoryComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/create', component: CreateProductComponent},
  {path: 'products/edit/:id', component: EditProductComponent},
  {path: '**', redirectTo: ''},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
