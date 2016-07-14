import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: 'layouts/header/header.component.html',
  styleUrls: ['layouts/header/header.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class HeaderComponent {
  constructor() {}

  ngOnInit() {}
 }
