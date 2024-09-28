import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ScheduleComponent } from '../schedule/schedule.component';
import { SliderComponent } from '../slider/slider.component';
import { FeautesComponent } from '../feautes/feautes.component';
import { ChooseUSComponent } from '../choose-us/choose-us.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { HeadPagePipPipe } from '../../pipes/head-page-pip.pipe';
import { FunFactsComponent } from '../fun-facts/fun-facts.component';



@NgModule({
  declarations: [
    ScheduleComponent,
    SliderComponent, FeautesComponent, ChooseUSComponent, ContactComponent, PortfolioComponent,FunFactsComponent
  ],
  imports: [
    CommonModule,NgOptimizedImage
  ],
  exports: [
    ScheduleComponent,
    SliderComponent , FeautesComponent, ChooseUSComponent, ContactComponent, PortfolioComponent ,FunFactsComponent
  ]
})
export class HomeModule { }
