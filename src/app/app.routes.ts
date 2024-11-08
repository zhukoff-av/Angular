import { Routes } from '@angular/router';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {ProductPageComponent} from './pages/product-page/product-page.component';

export const routes: Routes = [
  {path: '', component: ProductPageComponent},
  {path: 'about', component: AboutPageComponent}
];
