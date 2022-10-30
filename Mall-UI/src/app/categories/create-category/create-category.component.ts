import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(category: Category){
    this.categoriesService.add(category)
    .subscribe({
      next: () => {this.router.navigate(['/categories'])}
    })
  }

}
