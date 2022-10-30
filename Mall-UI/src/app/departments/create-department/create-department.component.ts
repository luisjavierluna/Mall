import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(department: Department){
    this.departmentsService.add(department)
    .subscribe({
      next: () => {this.router.navigate(['/departments'])}
    })
  }

}
