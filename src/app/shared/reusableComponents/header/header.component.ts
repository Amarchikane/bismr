import { textheading } from './../../../core/constants/textheading';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Homepage } from '../../../core/constants/constsnts';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('myDiv')
  myDivRef!: ElementRef;
 changeClass() {
    this.myDivRef.nativeElement.classList.remove('show'); // Remove a class
  }
  constructor(scrollToTopService: ScrollToTopService) {

  }
  textheading =textheading
  menu = Homepage.SupportingServices;
  SuperSpeciality = Homepage.SuperSpeciality;
  SpecialityServices = Homepage.SpecialityServices;
  RautersConstants = RautersConstants;
}
