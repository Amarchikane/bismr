import { Component } from '@angular/core';
import { BlogsComponent } from "../../../shared/reusableComponents/blogs/blogs.component";
import { blogsJson } from '../../../core/constants/blogs';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-news-and-blog',
  standalone: true,
  imports: [BlogsComponent,CommonModule,NgOptimizedImage],
  templateUrl: './news-and-blog.component.html',
  styleUrl: './news-and-blog.component.css'
})
export class NewsAndBlogComponent {
  blogs = blogsJson;
   constructor(scrollToTopService: ScrollToTopService) {

  }
}
