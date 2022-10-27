import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-megamenus',
  templateUrl: './navbar-megamenus.component.html',
  styleUrls: ['./navbar-megamenus.component.css']
})
export class NavbarMegamenusComponent implements OnInit {

  constructor() { }

  @Input()
  headerMenuAreasParam: any

  ngOnInit(): void {
  }

}
