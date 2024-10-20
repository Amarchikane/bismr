import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [ScrollToTopService],
  bootstrap: []

})
export class HomeModule { }
