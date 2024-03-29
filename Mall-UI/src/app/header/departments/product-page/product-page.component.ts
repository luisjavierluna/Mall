import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  productPage: PageProduct = {
    id: 0,
    name: '',
    image: '',
    price: 0,
    discount: 0,
    priceWithDiscount: 0,
    description: '',
    categoryId: 0,
    categoryName: '',
    departmentId: 0,
    departmentName: ''
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productsService.getByPageName(params['name'])
      .subscribe({
        next: productResponse => {
          this.productPage = productResponse
        },
        error: error => {console.log(error)}
      })
    })
  }

}
