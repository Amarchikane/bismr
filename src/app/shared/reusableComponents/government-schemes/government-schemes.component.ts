import { Component } from '@angular/core';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Schems } from '../../../core/constants/schems';

@Component({
  selector: 'app-government-schemes',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './government-schemes.component.html',
  styleUrl: './government-schemes.component.css'
})
export class GovernmentSchemesComponent {
  Schems = Schems;
 constructor(scrollToTopService: ScrollToTopService) {
  }
}
