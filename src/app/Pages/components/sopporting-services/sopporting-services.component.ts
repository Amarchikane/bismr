import { Component } from '@angular/core';
import { Homepage } from '../../../core/constants/constsnts';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { textheading } from '../../../core/constants/textheading';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../../modules/home/home-routing.module';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-sopporting-services',
  standalone: true,
  imports: [ CommonModule,HomeRoutingModule],
  templateUrl: './sopporting-services.component.html',
  styleUrl: './sopporting-services.component.css'
})
export class SopportingServicesComponent {
  services = Homepage.SupportingServices
  RautersConstants = RautersConstants
  sopportingServices = textheading.SupportingServices
   constructor(scrollToTopService: ScrollToTopService) {

  }
}
