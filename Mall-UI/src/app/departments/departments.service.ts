import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuDepartment } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'departments'

  getAllMenuDepartments(): Observable<MenuDepartment[]>{
    return this.http.get<MenuDepartment[]>(`${this.apiURL}/navbarMenuItems`)
  }
}
