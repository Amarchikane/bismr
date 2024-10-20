import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
constructor(scrollToTopService: ScrollToTopService) {

  }
}
