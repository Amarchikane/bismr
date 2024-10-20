import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Homepage } from '../../../core/constants/constsnts';
import { textheading } from '../../../core/constants/textheading';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { RouterLink } from '@angular/router';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-slider3d',
  standalone: true,
  imports: [NgOptimizedImage,CommonModule,RouterLink],
  templateUrl: './slider3d.component.html',
  styleUrl: './slider3d.component.css'
})
export class Slider3dComponent {
  constants = Homepage.SpecialityServices
  SpecialityServices = textheading.SpecialityServices
  RautersConstants = RautersConstants;
  constructor(scrollToTopService: ScrollToTopService) {

  }
}
