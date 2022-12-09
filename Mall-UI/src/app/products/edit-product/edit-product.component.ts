import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductCreationDTO } from 'src/app/models/product';
import { SecurityService } from 'src/app/security/security.service';
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
    private router: Router, 
    private securityService: SecurityService) { }

  productToEdit: Product = {id: 0, name: '', image: '', categoryId: 0, categoryName: '', departmentId: 0, departmentName: ''}

  ngOnInit(): void {
    if(this.securityService.isLoggedIn()) {
      this.activatedRoute.params.subscribe(params => {
        this.productsService.getById(params['id'])
        .subscribe({
          next: product => {this.productToEdit = product},
          error: error => {console.log(error)}
        })
      })
    } else {
      this.router.navigate(["/login"])
    }
  }

  saveChanges(product: ProductCreationDTO){
    if(this.securityService.isLoggedIn()) {
      this.productsService.edit(this.productToEdit.id, product)
      .subscribe({
        next: () => {this.router.navigate(['/products'])}
      })
    } else {
      this.router.navigate(["/login"])
    }
  }

}
