import { Component } from '@angular/core';
import { GovernmentSchemesComponent } from "../../../shared/reusableComponents/government-schemes/government-schemes.component";
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-various-government-schemes',
  standalone: true,
  imports: [GovernmentSchemesComponent],
  templateUrl: './various-government-schemes.component.html',
  styleUrl: './various-government-schemes.component.css'
})
export class VariousGovernmentSchemesComponent {
  constructor(scrollToTopService: ScrollToTopService) {
  }
}
