import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Department } from 'src/app/models/department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  constructor(
    private departmentsService: DepartmentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  departmentToEdit: Department = {id: 0, name: ''}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.departmentsService.getById(params['id'])
      .subscribe({
        next: department => {this.departmentToEdit = department},
        error: error => {console.log(error)}
      })
    })
  }

  saveChanges(department: Department){
    this.departmentsService.edit(this.departmentToEdit.id, department)
    .subscribe({
      next: () => {this.router.navigate(['/departments'])}
    })
  }
}
