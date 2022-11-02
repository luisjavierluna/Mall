import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  productToEdit: Product = {id: 0, name: '', categoryId: 0, categoryName: '', departmentId: 0, departmentName: ''}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productsService.getById(params['id'])
      .subscribe({
        next: product => {this.productToEdit = product},
        error: error => {console.log(error)}
      })
    })
  }

  saveChanges(product: Product){
    this.productsService.edit(this.productToEdit.id, product)
    .subscribe({
      next: () => {this.router.navigate(['/products'])}
    })
  }

}
