import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-form-departments',
  templateUrl: './form-departments.component.html',
  styleUrls: ['./form-departments.component.css']
})
export class FormDepartmentsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Output()
  onSubmit: EventEmitter<Category> = new EventEmitter<Category>()

  form: FormGroup = this.formBuilder.group({})
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
    })
  }

  saveChanges(){
    this.onSubmit.emit(this.form.value)
  }
}
