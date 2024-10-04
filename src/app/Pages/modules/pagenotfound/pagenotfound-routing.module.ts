import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
     {
    path: '',
    loadComponent: () => import('../../components/pagenotfound/pagenotfound.component').then(c=> c.PagenotfoundComponent)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagenotfoundRoutingModule { }
