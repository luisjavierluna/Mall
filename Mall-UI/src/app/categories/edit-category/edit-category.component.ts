import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryCreationDTO } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  categoryToEdit: Category = {id: 0, name: '', image: '', departmentId: 0, departmentName: ''}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.categoriesService.getById(params['id'])
      .subscribe({
        next: category => {this.categoryToEdit = category},
        error: error => {console.log(error)}
      })
    })
  }

  saveChanges(category: CategoryCreationDTO){
    this.categoriesService.edit(this.categoryToEdit.id, category)
    .subscribe({
      next: () => {this.router.navigate(['/categories'])}
    })
  }

}
