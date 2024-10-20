import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsAndBlogRoutingModule } from './news-and-blog-routing.module';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewsAndBlogRoutingModule
  ],
  providers: [ScrollToTopService],
  bootstrap: []
})
export class NewsAndBlogModule { }
