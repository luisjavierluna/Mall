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

  public add(category: Category):Observable<Category>{
    return this.http.post<Category>(this.apiURL, category)
  }

  public getById(id: number):Observable<Category>{
    return this.http.get<Category>(`${this.apiURL}/${id}`)
  }

  public edit(id: number, category: Category):Observable<Category>{
    return this.http.put<Category>(`${this.apiURL}/${id}`, category)
  }
}
