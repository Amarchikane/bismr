import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperSpecialityRoutingModule } from './super-speciality-routing.module';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SuperSpecialityRoutingModule
  ],
  providers: [ScrollToTopService],
  bootstrap: []
})
export class SuperSpecialityModule { }
