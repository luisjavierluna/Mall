import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products: Product[] = []

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.productsService.getAll()
    .subscribe({
      next: products => {this.products = products},
      error: error => {console.log(error)}
    })
  }

  delete(id: number){
    this.productsService.delete(id)
    .subscribe({
      next: () => {this.reloadCurrentPage()}
    })
  }

  reloadCurrentPage(){
    window.location.reload()
  }

}
