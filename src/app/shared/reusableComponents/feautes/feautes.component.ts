import { Component } from '@angular/core';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-feautes',
  standalone: false,
  templateUrl: './feautes.component.html',
  styleUrl: './feautes.component.css'
})
export class FeautesComponent {
  constructor(scrollToTopService: ScrollToTopService) {

  }
}

