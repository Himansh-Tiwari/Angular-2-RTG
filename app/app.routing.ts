import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Component/home.component'; 
import { HsnComponent } from './Component/hsn.component'; 

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hsn', component: HsnComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
