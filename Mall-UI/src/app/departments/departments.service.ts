import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, MenuDepartment } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'departments'

  public getAll():Observable<Department[]>{
    return this.http.get<Department[]>(this.apiURL)
  }

  getAllMenuDepartments(): Observable<MenuDepartment[]>{
    return this.http.get<MenuDepartment[]>(`${this.apiURL}/navbarMenuItems`)
  }

  public add(department: Department):Observable<Department>{
    return this.http.post<Department>(this.apiURL, department)
  }
}
