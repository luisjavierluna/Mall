import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private departmentsService: DepartmentsService) { }

  departments: Department[] = []

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.departmentsService.getAll()
    .subscribe({
      next: departments => {this.departments = departments},
      error: error => {console.log(error)}
    })
  }

}
