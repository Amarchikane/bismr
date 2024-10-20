import { Component } from '@angular/core';
import { ChatbotComponent } from "../chatbot/chatbot.component";
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [ChatbotComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
 constructor(scrollToTopService: ScrollToTopService) {

  }
}
