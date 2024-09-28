import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
   {
    path: '',
    loadComponent: () => import('../../components/page-not-found/page-not-found.component').then(c=> c.PageNotFoundComponent)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagenotfoundModule { }
