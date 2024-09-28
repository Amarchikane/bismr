import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HomeModule } from '../../../shared/reusableComponents/home/home.module';
import { HomePart2Module } from '../../../shared/reusableComponents/home-part2/home-part2.module';
import { PricingComponent } from "../../../shared/reusableComponents/pricing/pricing.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, HomeModule, HomePart2Module],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    public activeSlideIndex = 0; // Start with the second slide
isActiveSlide(index: number): any {
return index === this.activeSlideIndex;
}
  public slides = [
    {
      image: '/img/slider.jpg',
      title: 'We Provide Medical Services That You Can Trust!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.',
      button1Text: 'Get Appointment',
      button2Text: 'Learn More',
      slidenumber: '0'
    },
    {
      image: '/img/slider2.jpg',
      title: 'Another Great Slide',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button1Text: 'Contact Us',
      button2Text: 'Read More',
      slidenumber: '1'
    },
    // Add more slides here
  ];
}
