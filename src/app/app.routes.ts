import { Routes } from '@angular/router';
import { RautersConstants } from './core/constants/RauterConstants';

export const routes: Routes = [
   {
    path:RautersConstants.Home, loadChildren: () => import('./pages/modules/home/home-routing.module').then(c=> c.HomeRoutingModule)
  },
  {
    path: RautersConstants.about,
    loadChildren: () => import('./pages/modules/about/about-routing.module').then(c=> c.AboutRoutingModule)
  },
  {
    path: RautersConstants.contact,
    loadChildren: () => import('./pages/modules/contact/contact-routing.module').then(c=> c.ContactRoutingModule)
  },
  {
    path: RautersConstants.news,
    loadChildren: () => import('./pages/modules/news-and-blog/news-and-blog-routing.module').then(c=> c.NewsAndBlogRoutingModule)
  },
  {
    path: RautersConstants.sopportingServices,
    loadChildren: () => import('./pages/modules/sopporting-services/sopporting-services-routing.module').then(c=> c.SopportingServicesRoutingModule)
  },
  {
    path: RautersConstants.specialityservices,
    loadChildren: () => import('./pages/modules/speciality-services/speciality-services-routing.module').then(c=> c.SpecialityServicesRoutingModule)
  },
  {
    path: RautersConstants.superspeciality,
    loadChildren: () => import('./pages/modules/super-speciality/super-speciality-routing.module').then(c=> c.SuperSpecialityRoutingModule)
  },
  {
    path: RautersConstants.faq,
    loadChildren: () => import('./pages/modules/faq/faq-routing.module').then(c=> c.FAQRoutingModule)
  },
    {
    path: RautersConstants.career,
    loadChildren: () => import('./pages/modules/career/career-routing.module').then(c=> c.CareerRoutingModule)
  },
     {
    path: RautersConstants.chatbot,
    loadComponent: () => import('./pages/components/chatbot/chatbot.component').then(c=> c.ChatbotComponent)
  },
  {
    path: RautersConstants.variousgovernmentschemes,
    loadChildren: () => import('./pages/modules/various-government-schemes-module/various-government-schemes-module.module').then(c=> c.VariousGovernmentSchemesModuleModule)
  },
  { path: '',
    redirectTo: '/'+RautersConstants.Home,
    pathMatch: 'full'
  },
  { path: '**', loadChildren: () => import('./pages/modules/pagenotfound/pagenotfound-routing.module').then(c=> c.PagenotfoundRoutingModule) }

];
