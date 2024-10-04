import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../reusableComponents/footer/footer.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule , RouterLink
  ],
    exports: [
FooterComponent
  ]
})
export class FooterModule { }
