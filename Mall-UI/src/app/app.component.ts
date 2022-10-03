import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mall-UI';

  homeVariable: boolean = false;

  dimScreen(){
    this.homeVariable = !this.homeVariable
  }
}