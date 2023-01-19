import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { PageDepartment } from 'src/app/models/department';
import { parseAPIErrors } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.css']
})
export class DepartmentPageComponent implements OnInit {

  constructor(
    private departmentService: DepartmentsService,
    private activatedRoute: ActivatedRoute) { }

  department: PageDepartment = {
    id: 0,
    name: '',
    categories: []
  }

  errors: string[] = []

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.departmentService.getByPageName(params['name'])
      .subscribe({
        next: departmentResponse => {
          this.department = departmentResponse
        },
        error: errors => {this.errors = parseAPIErrors(errors)}
      })
    })
  }

}
