import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Homepage } from '../../../core/constants/constsnts';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { SuperSpecialityDetailsCons } from '../../../core/constants/SuperSpecialityData';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-super-speciality-options',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage,RouterLink],
  templateUrl: './super-speciality-options.component.html',
  styleUrl: './super-speciality-options.component.css'
})
export class SuperSpecialityOptionsComponent implements OnInit {
  SuperSpecialityIndex: any;
  Homepage = Homepage
  RautersConstants = RautersConstants;
  SingleSuperSpecialityDetails: any;
  SuperSpecialityDetails: any;
  details = false

  constructor(private activatedRoute: ActivatedRoute,private router: Router,scrollToTopService: ScrollToTopService) {
    this.reload()
  }
  ngOnInit(): void {
    this.reload()
  }


    reload() {
    this.SuperSpecialityIndex = this.activatedRoute.snapshot.paramMap.get('SuperSpeciality');
      this.reloadcomponent(this.SuperSpecialityIndex)

  }
  reloadcomponent(arg0: string) {
    this.SuperSpecialityIndex = arg0;

    this.SingleSuperSpecialityDetails = Homepage.SuperSpeciality.find(service => service.key === this.SuperSpecialityIndex);
  if (!(this.SingleSuperSpecialityDetails === undefined || this.SingleSuperSpecialityDetails.length == 0 )) {
        this.SuperSpecialityDetails = SuperSpecialityDetailsCons.SuperSpecialityDetails.find(service=>service.key === this.SingleSuperSpecialityDetails.title);
        this.details=true
      } else {
           this.router.navigate(['**']);
      }

}
}

