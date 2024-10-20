import { Component } from '@angular/core';
import { Slider3dComponent } from "../../../shared/reusableComponents/slider3d/slider3d.component";
import { HomeModule } from '../../../shared/Modules/home/home.module';
import { NgOptimizedImage } from '@angular/common';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Slider3dComponent, HomeModule,NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 constructor(scrollToTopService: ScrollToTopService) {

  }
}
