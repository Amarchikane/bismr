import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../../reusableComponents/header/header.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule ,RouterLink ,NgOptimizedImage
  ],
  exports: [
    HeaderComponent
  ]

})
export class HeaderModule { }
