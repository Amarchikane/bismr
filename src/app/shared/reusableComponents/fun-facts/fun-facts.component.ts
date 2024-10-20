import { Component } from '@angular/core';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-fun-facts',
  standalone: false,
  templateUrl: './fun-facts.component.html',
  styleUrl: './fun-facts.component.css'
})
export class FunFactsComponent {
count = 0;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  constructor(scrollToTopService: ScrollToTopService) {

  }
  ngOnInit() {
    this.startCounter();
  }

  startCounter() {
    const interval = setInterval(() => {
      if (this.count < 100) {
        this.count++;
      } else if (this.count1 < 200) {
        this.count1++;
      } else if (this.count2 < 400) {
        this.count2++;
      } else if (this.count3 < 100) {
        this.count3++;
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust the interval as needed
  }
}
