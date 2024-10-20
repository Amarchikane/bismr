import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  providers: [ScrollToTopService],
  bootstrap: []
})
export class ContactModule { }
