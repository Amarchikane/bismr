import { Component } from '@angular/core';
import { Slider3dComponent } from "../../../shared/reusableComponents/slider3d/slider3d.component";
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Homepage } from '../../../core/constants/constsnts';
import { textheading } from '../../../core/constants/textheading';

@Component({
  selector: 'app-speciality-services',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage,RouterLink],
  templateUrl: './speciality-services.component.html',
  styleUrl: './speciality-services.component.css'
})
export class SpecialityServicesComponent {
  RautersConstants = RautersConstants;
  Homepage = Homepage;
  specialityservices=textheading.SpecialityServices
 constructor(scrollToTopService: ScrollToTopService) {

  }
}
