import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
    path: '',
    loadComponent: () => import('../../components/various-government-schemes/various-government-schemes.component').then(c=> c.VariousGovernmentSchemesComponent)

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariousGovernmentSchemesModuleRoutingModule { }
