import { Component } from '@angular/core';
import { Homepage } from '../../../core/Constants/stringConstants/homepageString';

@Component({
  selector: 'app-slider',
  standalone: false,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  public activeSlideIndex = 0; // Start with the second slide
isActiveSlide(index: number): any {
return index === this.activeSlideIndex;
}
  public slides = Homepage.sliderData
}
