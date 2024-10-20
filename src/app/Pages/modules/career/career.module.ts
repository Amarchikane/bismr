import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CareerRoutingModule
  ],
  providers: [ScrollToTopService],
  bootstrap: []
})
export class CareerModule { }
