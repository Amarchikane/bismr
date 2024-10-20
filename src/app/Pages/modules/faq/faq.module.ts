import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FAQRoutingModule } from './faq-routing.module';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FAQRoutingModule,
  ],
  providers: [ScrollToTopService],
  bootstrap: []
})
export class FAQModule { }
