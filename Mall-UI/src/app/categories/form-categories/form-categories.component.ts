import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { Category, CategoryCreationDTO } from 'src/app/models/category';
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
  categoryToEditParam: Category = {id: 0, name: '', image: '', departmentId: 0, departmentName: ''}

  @Output()
  OnSubmit: EventEmitter<CategoryCreationDTO> = new EventEmitter<CategoryCreationDTO>()

  categoryImageChanged = false

  form: FormGroup = this.formBuilder.group({})
  departmentsSelectListOptions: Department[] = []

  ngOnInit(): void {
    this.getAllDepartments()

    this.form = this.formBuilder.group({
      name: '',
      departmentId: '',
      image: ''
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

  selectedFile(file: any){
    this.categoryImageChanged = true
    this.form.get('image')?.setValue(file)
  }

  saveChanges(){
    if(!this.categoryImageChanged){
      this.form.patchValue({'image': null})
    }

    this.OnSubmit.emit(this.form.value)
  }

}
