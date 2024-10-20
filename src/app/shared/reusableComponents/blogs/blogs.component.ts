import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { blogsJson } from '../../../core/constants/blogs';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs = blogsJson;
  constructor(scrollToTopService: ScrollToTopService) {

  }
}
