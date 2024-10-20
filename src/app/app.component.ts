import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { FooterModule } from './shared/Modules/footer/footer.module';
import { HeaderModule } from './shared/Modules/header/header.module';
import { ScrollToTopService } from './core/services/scroll-to-top.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderModule , FooterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bismr';
  constructor(scrollToTopService: ScrollToTopService) {

  }
}
