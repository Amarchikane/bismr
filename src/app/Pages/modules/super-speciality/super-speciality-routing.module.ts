import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
     {
    path: '',
    loadComponent: () => import('../../components/super-speciality/super-speciality.component').then(c=> c.SuperSpecialityComponent)

  },
  {
    path: ':SuperSpeciality',
    loadComponent: () => import('../../components/super-speciality-options/super-speciality-options.component').then(c=> c.SuperSpecialityOptionsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperSpecialityRoutingModule { }
