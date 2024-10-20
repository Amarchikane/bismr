import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeRoutingModule } from '../../modules/home/home-routing.module';
import { Homepage } from '../../../core/constants/constsnts';
import { textheading } from '../../../core/constants/textheading';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-super-speciality',
  standalone: true,
  imports: [CommonModule,HomeRoutingModule],
  templateUrl: './super-speciality.component.html',
  styleUrl: './super-speciality.component.css'
})
export class SuperSpecialityComponent {
  services =  Homepage.SuperSpeciality
  SuperSpeciality = textheading.SuperSpeciality;
  RautersConstants = RautersConstants
    constructor(scrollToTopService: ScrollToTopService) {

  }
}
