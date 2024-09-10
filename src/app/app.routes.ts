import { Routes } from '@angular/router';
import { Page1Component } from './core/components/page1/page1.component';
import { Page2Component } from './core/components/page2/page2.component';
// import { HeaderComponent } from './core/components/header/header.component';
import { ButtonComponent } from './core/components/button/button.component';

export const routes: Routes = [
  {
    path: '',
    component: ButtonComponent,
  },
  {
    path: 'home',
    component: Page1Component,
  },
  {
    path: 'item1',
    component: Page2Component,
  },
];
