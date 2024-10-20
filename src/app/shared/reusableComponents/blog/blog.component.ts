import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { blogsJson } from '../../../core/constants/blogs';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgOptimizedImage,CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogsJson = blogsJson;
  constructor(scrollToTopService: ScrollToTopService) {

  }
}
