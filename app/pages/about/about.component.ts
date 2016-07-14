import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'pages-about',
  templateUrl: 'pages/about/about.component.html',
  styleUrls: ['pages/about/about.component.css'],
  directives: [HeaderComponent, FooterComponent],
})
export class PagesAboutComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    /*this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
      });*/
  }
 }
