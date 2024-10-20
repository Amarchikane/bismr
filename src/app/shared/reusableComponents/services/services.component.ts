import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Homepage } from '../../../core/constants/constsnts';
import { HomeRoutingModule } from '../../../pages/modules/home/home-routing.module';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { textheading } from '../../../core/constants/textheading';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports:[ CommonModule,HomeRoutingModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  textheading=textheading
  services = Homepage.SupportingServices
  RautersConstants = RautersConstants
  sopportingServices = textheading.SupportingServices
  constructor(scrollToTopService: ScrollToTopService) {

  }
}
