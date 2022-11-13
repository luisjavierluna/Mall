import { Component } from '@angular/core';
import { NavbarMenusComponent } from './header/navbar-menus/navbar-menus.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mall-UI';

  constructor () { }

  searchBoxVariable = false

  showSearchBox(){
    this.searchBoxVariable = !this.searchBoxVariable
  }
}
