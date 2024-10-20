import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RautersConstants } from '../../../core/constants/RauterConstants';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';
@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.css'
})
export class PagenotfoundComponent {
RautersConstants= RautersConstants;
 constructor(scrollToTopService: ScrollToTopService) {

  }
}
