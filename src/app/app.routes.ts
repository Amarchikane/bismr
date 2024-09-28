
import { Routes } from '@angular/router';
import { HeaderComponent } from './Pages/components/header/header.component';
import { FooterComponent } from './Pages/components/footer/footer.component';
import { PageNotFoundComponent } from './Pages/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path:'header', loadChildren: () => import('./Pages/components/home/home-routing.module').then(c=> c.HomeRoutingModule)
  },

  {
    path: 'footer',
    loadChildren: () => import('./Pages/components/footer/footer-routing.module').then(c => c.FooterRoutingModule)
  },
  { path: '',
    redirectTo: '/header',
    pathMatch: 'full'
  },
  { path: '**', loadChildren: () => import('./Pages/modules/pagenotfound/PagenotfoundModule.module').then(c=> c.PagenotfoundModule) }

];
