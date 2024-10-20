import { Component } from '@angular/core';
import { SliderComponent } from "../../../shared/reusableComponents/slider/slider.component";
import { ScheduleComponent } from "../../../shared/reusableComponents/schedule/schedule.component";
import { HomeModule } from '../../../shared/Modules/home/home.module';
import { ServicesComponent } from "../../../shared/reusableComponents/services/services.component";
import { BlogComponent } from "../../../shared/reusableComponents/blog/blog.component";
import { AppointmentComponent } from "../../../shared/reusableComponents/appointment/appointment.component";
import { Slider3dComponent } from "../../../shared/reusableComponents/slider3d/slider3d.component";
import { PatientsSpeakComponent } from "../../../shared/reusableComponents/patients-speak/patients-speak.component";
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';
import { SchemesSectionComponent } from "../../../shared/reusableComponents/schemes-section/schemes-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, ScheduleComponent, HomeModule, ServicesComponent, BlogComponent, AppointmentComponent, Slider3dComponent, PatientsSpeakComponent, SchemesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 constructor(scrollToTopService: ScrollToTopService) {

  }
}
