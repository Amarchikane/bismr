import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Homepage } from '../../../core/constants/constsnts';
import { CommonModule , NgOptimizedImage } from '@angular/common';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { ServiceDetailsCons } from '../../../core/constants/servicesdetails';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';
@Component({
  selector: 'app-sopporting-services-options',
  standalone: true,
  imports: [  CommonModule ,RouterLink ,NgOptimizedImage],
  templateUrl: './sopporting-services-options.component.html',
  styleUrl: './sopporting-services-options.component.css'
})
export class SopportingServicesOptionsComponent implements OnInit {

  Homepage = Homepage
  RautersConstants = RautersConstants
  details=false
  supportingServices: any
  supportingServicesTitle: any
  ServiceDetails:any;

  constructor(private activatedRoute: ActivatedRoute,private router: Router,scrollToTopService: ScrollToTopService) {
   this.reload()
  }
  ngOnInit(): void {
   this.reload()
  }

  reload() {
    this.supportingServices = this.activatedRoute.snapshot.paramMap.get('supportingServices');
    this.reloadcomponent(this.supportingServices)
  }
  reloadcomponent(arg0: string) {

    this.supportingServicesTitle = Homepage.SupportingServices.find(service => service.key === arg0);
    if (!(this.supportingServicesTitle === undefined || this.supportingServicesTitle.length == 0)) {
       this.ServiceDetails = ServiceDetailsCons.ServiceDetails.find(service=>service.title === this.supportingServicesTitle.title);
     this.details=true
      } else {
           this.router.navigate(['**']);
      }

}
}
