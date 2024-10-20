import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Homepage } from '../../../core/constants/constsnts';
import { CommonModule , NgOptimizedImage } from '@angular/common';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';
@Component({
  selector: 'app-speciality-services-options',
  standalone: true,
  imports: [ CommonModule,NgOptimizedImage,RouterLink ],
  templateUrl: './speciality-services-options.component.html',
  styleUrl: './speciality-services-options.component.css'
})
export class SpecialityServicesOptionsComponent implements OnInit {
  SpecialityServicesIndex: any;
  Homepage = Homepage
  RautersConstants = RautersConstants;
    details=false
  SingleSpecialityServicesDetails: any;

  constructor(private activatedRoute: ActivatedRoute ,private router: Router,scrollToTopService: ScrollToTopService) {
  }
  ngOnInit(): void {
    this.SpecialityServicesIndex = this.activatedRoute.snapshot.paramMap.get('SpecialityServices');
     this.SingleSpecialityServicesDetails =this.Homepage.SpecialityServices.find(service => service.key === this.SpecialityServicesIndex);

   if (!(this.SingleSpecialityServicesDetails === undefined || this.SingleSpecialityServicesDetails.length == 0 )) {
         this.details=true
      } else {
           this.router.navigate(['**']);
      }
  }
}
