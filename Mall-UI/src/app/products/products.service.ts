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
}