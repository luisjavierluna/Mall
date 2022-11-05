import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  categories: Category[] = []

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.categoriesService.getAll()
    .subscribe({
      next: categories => {this.categories = categories},
      error: error => {console.log(error)}
    })
  }

  delete(id: number){
    this.categoriesService.delete(id)
    .subscribe({
      next: () => {this.reloadCurrentPage()}
    })
  }

  reloadCurrentPage(){
    window.location.reload()
  }
}
