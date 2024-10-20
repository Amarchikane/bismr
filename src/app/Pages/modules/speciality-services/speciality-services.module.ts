import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialityServicesRoutingModule } from './speciality-services-routing.module';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpecialityServicesRoutingModule
  ]
  ,
  providers: [ScrollToTopService],
  bootstrap: []
})
export class SpecialityServicesModule { }
