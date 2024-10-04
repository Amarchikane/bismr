import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Homepage } from '../../../core/constants/constsnts';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
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
