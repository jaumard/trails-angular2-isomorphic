import {Component} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';
import {Http} from '@angular/http';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

@Component({
  selector: 'app',
  providers: [Http],
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
  styles: [],
  template: `<div class="content vertical grid-block">
      <header-component></header-component>
        <router-outlet></router-outlet>
      <footer-component></footer-component>
   </div>`
})

export class AppComponent {
}
