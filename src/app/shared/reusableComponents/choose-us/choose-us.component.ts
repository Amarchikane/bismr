import { Component } from '@angular/core';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-choose-us',
  standalone: false,
  templateUrl: './choose-us.component.html',
  styleUrl: './choose-us.component.css'
})
export class ChooseUSComponent {
  RautersConstants = RautersConstants;
  constructor(scrollToTopService: ScrollToTopService) {

  }
}
