import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-menus',
  templateUrl: './navbar-menus.component.html',
  styleUrls: ['./navbar-menus.component.css']
})
export class NavbarMenusComponent implements OnInit {

  constructor() { }


  headerMenuDepartments = [
    {
      id: 1,
      name: 'Computer', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
    {
      id: 2,
      name: 'Consoles', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
    {
      id: 3,
      name: 'Videogames', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
    {
      id: 4,
      name: 'Components', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
    {
      id: 5,
      name: 'Accessories', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
    {
      id: 6,
      name: 'Workstations', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
  ]





  ngOnInit(): void {
  }

  navbarLinksVariable = false
  //CONFLICT function used in this component, but variable used in father component
  homeVariable: boolean = false

  computersMBVariable: boolean = false
  consolesMBVariable: boolean = false
  videogamesMBVariable: boolean = false
  componentsMBVariable: boolean = false
  accesoriesMBVariable: boolean = false
  workstationMBVariable: boolean = false

  showNavbarLinksUl(){
    this.navbarLinksVariable = !this.navbarLinksVariable
  }

  //CONFLICT function used in this component, but variable used in father component
  dimScreen(){
    this.homeVariable = !this.homeVariable
  }

  showComputersUl(){
    this.computersMBVariable = !this.computersMBVariable
  }

  showConsolesUl(){
    this.consolesMBVariable = !this.consolesMBVariable
  }

  showVideogamesUl(){
    this.videogamesMBVariable = !this.videogamesMBVariable
  }

  showComponentsUl(){
    this.componentsMBVariable = !this.componentsMBVariable
  }

  showAccesoriesUl(){
    this.accesoriesMBVariable = !this.accesoriesMBVariable
  }

  showWorkstationUl(){
    this.workstationMBVariable = !this.workstationMBVariable
  }

}
