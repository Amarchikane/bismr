import { Component } from '@angular/core';
import { faqConstants } from '../../../core/constants/faqconstants';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {
  faq = faqConstants.faq;
   constructor(scrollToTopService: ScrollToTopService) {

  }
}
