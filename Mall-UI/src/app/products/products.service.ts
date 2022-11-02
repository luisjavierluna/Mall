import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'products'

  public getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL)
  }
  
  public add(product: Product):Observable<Product>{
    return this.http.post<Product>(this.apiURL, product)
  }

  public getById(id: number):Observable<Product>{
    return this.http.get<Product>(`${this.apiURL}/${id}`)
  }

  public edit(id: number, product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiURL}/${id}`, product)
  }
}
