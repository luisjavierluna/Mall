import { Component } from '@angular/core';

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
}
