import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { Category } from 'src/app/models/category';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-form-categories',
  templateUrl: './form-categories.component.html',
  styleUrls: ['./form-categories.component.css']
})
export class FormCategoriesComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private departmentsService: DepartmentsService) { }

  @Input()
  categoryToEditParam: Category = {id: 0, name: '', departmentId: 0, departmentName: ''}

  @Output()
  onSubmit: EventEmitter<Category> = new EventEmitter<Category>()

  form: FormGroup = this.formBuilder.group({})
  departmentsSelectListOptions: Department[] = []

  ngOnInit(): void {
    this.getAllDepartments()

    this.form = this.formBuilder.group({
      name: '',
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

  saveChanges(){
    this.onSubmit.emit(this.form.value)
  }

}
