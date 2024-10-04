import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [
     {
    path: '',
    loadComponent: () => import('../../components/sopporting-services/sopporting-services.component').then(c=> c.SopportingServicesComponent)

  },
  {
    path: ':supportingServices',
    loadComponent: () => import('../../components/sopporting-services-options/sopporting-services-options.component').then(c=> c.SopportingServicesOptionsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SopportingServicesRoutingModule { }
