import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { blogsJson } from '../../../core/constants/blogs';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-patients-speak',
  standalone: true,
  imports: [NgOptimizedImage,CommonModule],
  templateUrl: './patients-speak.component.html',
  styleUrl: './patients-speak.component.css'
})
export class PatientsSpeakComponent {
  blogsJson = blogsJson;
  constructor(scrollToTopService: ScrollToTopService) {

  }
}
