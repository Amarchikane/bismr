import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
     {
    path: '',
    loadComponent: () => import('../../components/speciality-services/speciality-services.component').then(c=> c.SpecialityServicesComponent)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialityServicesRoutingModule { }
