import { Component } from '@angular/core';
import { area } from './mega-boxes/area';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mall-UI';

  navbarLinksVariable = false
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

  computerAreas: area[] = [
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
    {
      areaName: 'Email Services',
      subAreas: ['Personal Email', 'Business Email', 'Mobile Email', 'Web Marketing']
    },
    {
      areaName: 'Security Services',
      subAreas: ['Site Seal', 'VPS Hosting', 'Privacy Seal', 'Website design']
    },
  ]

  consoleAreas: area[] = [
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
    {
      areaName: 'Email Services',
      subAreas: ['Personal Email', 'Business Email', 'Mobile Email', 'Web Marketing']
    },
    {
      areaName: 'Security Services',
      subAreas: ['Site Seal', 'VPS Hosting', 'Privacy Seal', 'Website design']
    },
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
  ]

  videogameAreas: area[] = [
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
    {
      areaName: 'Email Services',
      subAreas: ['Personal Email', 'Business Email', 'Mobile Email', 'Web Marketing']
    },
    {
      areaName: 'Security Services',
      subAreas: ['Site Seal', 'VPS Hosting', 'Privacy Seal', 'Website design']
    },
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
  ]

  componentAreas: area[] = [
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
    {
      areaName: 'Email Services',
      subAreas: ['Personal Email', 'Business Email', 'Mobile Email', 'Web Marketing']
    },
    {
      areaName: 'Security Services',
      subAreas: ['Site Seal', 'VPS Hosting', 'Privacy Seal', 'Website design']
    },
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
  ]

  accesoryAreas: area[] = [
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
    {
      areaName: 'Email Services',
      subAreas: ['Personal Email', 'Business Email', 'Mobile Email', 'Web Marketing']
    },
    {
      areaName: 'Security Services',
      subAreas: ['Site Seal', 'VPS Hosting', 'Privacy Seal', 'Website design']
    },
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
  ]

  workstationAreas: area[] = [
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
    {
      areaName: 'Email Services',
      subAreas: ['Personal Email', 'Business Email', 'Mobile Email', 'Web Marketing']
    },
    {
      areaName: 'Security Services',
      subAreas: ['Site Seal', 'VPS Hosting', 'Privacy Seal', 'Website design']
    },
    {
      areaName: 'Design Services',
      subAreas: ['Graphics', 'Vectors', 'Business cards', 'Custom logo']
    },
  ]
}
