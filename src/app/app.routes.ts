import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path:'Home', loadChildren: () => import('./pages/modules/home/home-routing.module').then(c=> c.HomeRoutingModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/modules/about/about-routing.module').then(c=> c.AboutRoutingModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/modules/contact/contact-routing.module').then(c=> c.ContactRoutingModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/modules/news-and-blog/news-and-blog-routing.module').then(c=> c.NewsAndBlogRoutingModule)
  },
  {
    path: 'sopporting-services',
    loadChildren: () => import('./pages/modules/sopporting-services/sopporting-services-routing.module').then(c=> c.SopportingServicesRoutingModule)
  },
  {
    path: 'speciality-services',
    loadChildren: () => import('./pages/modules/speciality-services/speciality-services-routing.module').then(c=> c.SpecialityServicesRoutingModule)
  },
  {
    path: 'super-speciality',
    loadChildren: () => import('./pages/modules/super-speciality/super-speciality-routing.module').then(c=> c.SuperSpecialityRoutingModule)
  },
    {
    path: 'career',
    loadChildren: () => import('./pages/modules/career/career-routing.module').then(c=> c.CareerRoutingModule)
  },
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: '**', loadChildren: () => import('./pages/modules/pagenotfound/pagenotfound-routing.module').then(c=> c.PagenotfoundRoutingModule) }

];
