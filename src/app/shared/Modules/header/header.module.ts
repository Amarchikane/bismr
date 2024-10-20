import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../../reusableComponents/header/header.component';
import { RouterLink } from '@angular/router';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule ,RouterLink ,NgOptimizedImage,RouterLink
  ],
  exports: [
    HeaderComponent
  ],
    providers: [ScrollToTopService],
  bootstrap: [HeaderComponent]

})
export class HeaderModule { }
