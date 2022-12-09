import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoryCreationDTO } from 'src/app/models/category';
import { SecurityService } from 'src/app/security/security.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private securityService: SecurityService) { }

  ngOnInit(): void {
  }

  saveChanges(category: CategoryCreationDTO){
    if(this.securityService.isLoggedIn()){
      this.categoriesService.add(category)
      .subscribe({
        next: () => {this.router.navigate(['/categories'])}
      })
    } else {
      this.router.navigate(["/login"])
    }
  }

}
