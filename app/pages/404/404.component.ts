import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'pages-404',
  templateUrl: 'pages/404/404.component.html',
  styleUrls: ['pages/404/404.component.css'],
  directives: [HeaderComponent, FooterComponent],
})
export class Pages404Component {
  constructor() {}

  ngOnInit() {}
 }
