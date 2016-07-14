import { provideRouter, RouterConfig } from '@angular/router';
import { PagesHomeComponent } from './pages/home/home.component';
import { PagesAboutComponent } from './pages/about/about.component';
import { Pages404Component } from './pages/404/404.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: PagesHomeComponent },
  { path: 'about',  component: PagesAboutComponent },
  // make sure you match the component type string to the require in asyncRoutes
  { path: '**',    component: Pages404Component },
];

export const appRouterProviders = [
  provideRouter(routes)
];
