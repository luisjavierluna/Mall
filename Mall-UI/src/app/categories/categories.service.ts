import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'categories'

  public getAll():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiURL)
  }
}
