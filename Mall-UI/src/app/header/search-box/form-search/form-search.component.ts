import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/products/products.service';
import { debounceTime } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService) { }

  form: FormGroup = this.formBuilder.group({})

  products: Product[] = []

  productsOriginal: Product[] = []

  suggestionsSize = 5

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
        this.searchMovies(values)
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

  searchMovies(values: any){
    if(values.name){
      this.products = this.products.filter(product => product.name.toUpperCase().includes(values.name.toUpperCase())).slice(0, 10)
      // this.products = this.products.filter(product => product.name.indexOf(values.name) !== -1).slice(0, 10)
    }

    this.searchLength = this.form.value.name
  }

  saveChamges(){
    console.log(this.form.value.name)
    window.location.reload()
  }
}
