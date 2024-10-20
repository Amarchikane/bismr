import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariousGovernmentSchemesModuleRoutingModule } from './various-government-schemes-module-routing.module';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VariousGovernmentSchemesModuleRoutingModule
  ],
    providers: [ScrollToTopService],
  bootstrap: []
})
export class VariousGovernmentSchemesModuleModule { }
