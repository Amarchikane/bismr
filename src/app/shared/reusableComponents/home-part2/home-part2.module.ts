import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ServicesComponent } from '../services/services.component';
import { PricingComponent } from '../pricing/pricing.component';



@NgModule({
  declarations: [ServicesComponent , PricingComponent],
  imports: [
    CommonModule ,NgOptimizedImage
  ] ,
   exports: [ServicesComponent, PricingComponent]
})
export class HomePart2Module { }
