import { Component, OnInit } from '@angular/core';
import { Homepage } from '../../../core/constants/constsnts';
import { textheading } from '../../../core/constants/textheading';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  Homepages = Homepage;
  heading = textheading;
  RautersConstants = RautersConstants;
  constructor(scrollToTopService: ScrollToTopService) {

  }
    ngOnInit() {
  }

}
