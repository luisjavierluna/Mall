import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreationDTO } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'products'

  public getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL)
  }
  
  public add(product: ProductCreationDTO):Observable<ProductCreationDTO>{
    return this.http.post<ProductCreationDTO>(this.apiURL, product)
  }

  public getById(id: number):Observable<Product>{
    return this.http.get<Product>(`${this.apiURL}/${id}`)
  }

  public edit(id: number, product: ProductCreationDTO):Observable<ProductCreationDTO>{
    return this.http.put<ProductCreationDTO>(`${this.apiURL}/${id}`, product)
  }

  public delete(id: number):Observable<Product>{
    return this.http.delete<Product>(`${this.apiURL}/${id}`)
  }
}
