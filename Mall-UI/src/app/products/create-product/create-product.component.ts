import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductCreationDTO } from 'src/app/models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(product: ProductCreationDTO){
    this.productsService.add(product)
    .subscribe({
      next: () => {this.router.navigate(['/products'])}
    })
  }

}
