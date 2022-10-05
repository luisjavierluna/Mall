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
  megaBoxVariable: boolean = false

  showNavbarLinksUl(){
    this.navbarLinksVariable = !this.navbarLinksVariable
  }

  dimScreen(){
    this.homeVariable = !this.homeVariable
  }

  showMegaBox(){
    this.megaBoxVariable = !this.megaBoxVariable
  }
}
