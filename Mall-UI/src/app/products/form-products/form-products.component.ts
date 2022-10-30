import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from 'src/app/categories/categories.service';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { Category } from 'src/app/models/category';
import { Department } from 'src/app/models/department';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css']
})
export class FormProductsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private departmentsService: DepartmentsService,
    private categoriesService: CategoriesService) { }

  department: Department = {id: 0, name: ''}

  @Output()
  onSubmit: EventEmitter<Product> = new EventEmitter<Product>()

  form: FormGroup = this.formBuilder.group({})
  departmentsSelectListOptions: Department[] = []
  categories: Category[] = []
  categoriesSelectListOptions: Category[] = []

  ngOnInit(): void {
    this.getAllCategories()
    this.getAllDepartments()

    this.form = this.formBuilder.group({
      name: '',
      categoryId: '',
      departmentId: ''
    })
  }

  getAllDepartments(){
    this.departmentsService.getAll()
    .subscribe({
      next: departments => {
        this.departmentsSelectListOptions = departments
      }
    })
  }

  getAllCategories(){
    this.categoriesService.getAll()
    .subscribe({
      next: categories => {this.categories = categories}
    })
  }

  saveChanges(){
    this.onSubmit.emit(this.form.value)
  }

  setCategory(){
    this.categoriesSelectListOptions = []
    
    this.department.id = this.form.value.departmentId

    this.categories.forEach(category => {
      if(category.departmentId == this.department.id){
        this.categoriesSelectListOptions.push(category)
      }
    });
  }
}
