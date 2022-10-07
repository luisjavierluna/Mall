import { Component, Input, OnInit } from '@angular/core';
import { area } from '../area';

@Component({
  selector: 'app-menu-model',
  templateUrl: './menu-model.component.html',
  styleUrls: ['./menu-model.component.css']
})
export class MenuModelComponent implements OnInit {

  constructor() { }

  @Input()
  departmentAreasModel?: area[]

  departmentAreas?: area[]
  
  ngOnInit(): void {
    if(this.departmentAreasModel !== undefined){
      this.departmentAreas = this.departmentAreasModel;
    }
  }

}
