import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChooseUSComponent } from '../../reusableComponents/choose-us/choose-us.component';
import { ContactComponent } from '../../reusableComponents/contact/contact.component';
import { FeautesComponent } from '../../reusableComponents/feautes/feautes.component';
import { FunFactsComponent } from '../../reusableComponents/fun-facts/fun-facts.component';
import { PortfolioComponent } from '../../reusableComponents/portfolio/portfolio.component';
import { ScheduleComponent } from '../../reusableComponents/schedule/schedule.component';
import { SliderComponent } from '../../reusableComponents/slider/slider.component';
import { RouterLink } from '@angular/router';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';




@NgModule({
  declarations: [

     FeautesComponent, ChooseUSComponent, ContactComponent, PortfolioComponent,FunFactsComponent
  ],
  imports: [
    CommonModule,NgOptimizedImage,RouterLink
  ],
  exports: [

      FeautesComponent, ChooseUSComponent, ContactComponent, PortfolioComponent ,FunFactsComponent
  ],
    providers: [ScrollToTopService],
  bootstrap: [FeautesComponent, ChooseUSComponent, ContactComponent, PortfolioComponent,FunFactsComponent]

})
export class HomeModule { }
