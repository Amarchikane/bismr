import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sopporting-services-options',
  standalone: true,
  imports: [],
  templateUrl: './sopporting-services-options.component.html',
  styleUrl: './sopporting-services-options.component.css'
})
export class SopportingServicesOptionsComponent implements OnInit {
supportingServices:any
   constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
     this.supportingServices = this.activatedRoute.snapshot.paramMap.get('supportingServices');
  }

}
