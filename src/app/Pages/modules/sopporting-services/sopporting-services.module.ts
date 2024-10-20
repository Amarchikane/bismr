import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SopportingServicesRoutingModule } from './sopporting-services-routing.module';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SopportingServicesRoutingModule
  ]
  ,
  providers: [ScrollToTopService],
  bootstrap: []
})
export class SopportingServicesModule { }
