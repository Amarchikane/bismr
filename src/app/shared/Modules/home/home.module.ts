import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChooseUSComponent } from '../../reusableComponents/choose-us/choose-us.component';
import { ContactComponent } from '../../reusableComponents/contact/contact.component';
import { FeautesComponent } from '../../reusableComponents/feautes/feautes.component';
import { FunFactsComponent } from '../../reusableComponents/fun-facts/fun-facts.component';
import { PortfolioComponent } from '../../reusableComponents/portfolio/portfolio.component';
import { ScheduleComponent } from '../../reusableComponents/schedule/schedule.component';
import { SliderComponent } from '../../reusableComponents/slider/slider.component';




@NgModule({
  declarations: [

     FeautesComponent, ChooseUSComponent, ContactComponent, PortfolioComponent,FunFactsComponent
  ],
  imports: [
    CommonModule,NgOptimizedImage
  ],
  exports: [

      FeautesComponent, ChooseUSComponent, ContactComponent, PortfolioComponent ,FunFactsComponent
  ]
})
export class HomeModule { }
