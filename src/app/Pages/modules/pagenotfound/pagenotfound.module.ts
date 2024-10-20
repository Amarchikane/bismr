import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule
  ],
  providers: [ScrollToTopService],
  bootstrap: []
})
export class PagenotfoundModule { }
