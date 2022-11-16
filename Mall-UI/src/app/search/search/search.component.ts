import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService) { }

  form: FormGroup = this.formBuilder.group({})

  products: Product[] = []

  productsOriginal: Product[] = []

  suggestionsSize = 10

  searchLength: string = ''

  ngOnInit(): void {
    this.getAll()

    console.log(this.productsOriginal)

    this.form = this.formBuilder.group({
      name: ''
    })

    this.form.valueChanges
    .pipe(debounceTime(300))
    .subscribe({
      next: values => {
        console.log(values)
        this.products = this.productsOriginal
        this.searchProducts(values)
      }
    })
  }

  getAll(){
    this.productsService.getAll()
    .subscribe({
      next: products => {
        this.products = products
        this.productsOriginal = products
      }
    })
  }

  searchProducts(values: any){
    if(values.name){
      this.products = this.products
      .filter(product => product.name.toUpperCase()
      .includes(values.name.toUpperCase())).slice(0, this.suggestionsSize)
    }
  }

  saveChamges(){
    console.log(this.form.value.name)
    window.location.reload()
  }

}
