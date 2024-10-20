import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../reusableComponents/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule , RouterLink
  ],
    exports: [
FooterComponent
  ],
  providers: [ScrollToTopService],
  bootstrap: [FooterComponent]
})
export class FooterModule { }
