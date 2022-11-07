import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from 'src/app/categories/categories.service';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { Category } from 'src/app/models/category';
import { Department } from 'src/app/models/department';
import { Product, ProductCreationDTO } from 'src/app/models/product';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css']
})
export class FormProductsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private departmentsService: DepartmentsService,
    private categoriesService: CategoriesService) { }

  @Input()
  productToEditParam: Product = {id: 0, name: '', image: '', categoryId: 0, categoryName: '', departmentId: 0, departmentName: ''}
  
  @Output()
  OnSubmit: EventEmitter<ProductCreationDTO> = new EventEmitter<ProductCreationDTO>()
  
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
      departmentId: '',
      image: ''
    })
  }

  getAllDepartments(){
    this.departmentsService.getAll()
    .subscribe({
      next: departments => {
        setTimeout(() => {
          this.departmentsSelectListOptions = departments
          this.setCategory()
        }, 500);
      }
    })
  }

  getAllCategories(){
    this.categoriesService.getAll()
    .subscribe({
      next: categories => {this.categories = categories}
    })
  }

  selectedFile(file: any){
    this.form.get('image')?.setValue(file)
  }

  saveChanges(){
    this.OnSubmit.emit(this.form.value)
  }

  setCategory(){
    setTimeout(() => {
      this.categoriesSelectListOptions = []
      
      this.productToEditParam.departmentId = this.form.value.departmentId
  
      this.categories.forEach(category => {
        if(category.departmentId == this.productToEditParam.departmentId){
          this.categoriesSelectListOptions.push(category)
        }
      })
    }, 500)
  }
}
