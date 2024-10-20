import { Component } from '@angular/core';
import { HomeModule } from '../../../shared/Modules/home/home.module';
import { AppointmentComponent } from "../../../shared/reusableComponents/appointment/appointment.component";
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ AppointmentComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 constructor(scrollToTopService: ScrollToTopService) {

  }
}
