import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'footer-component',
  templateUrl: 'layouts/footer/footer.component.html',
  styleUrls: ['layouts/footer/footer.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class FooterComponent {
  constructor() {}

  ngOnInit() {}
 }
