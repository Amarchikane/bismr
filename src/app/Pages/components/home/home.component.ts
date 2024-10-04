import { Component } from '@angular/core';
import { SliderComponent } from "../../../shared/reusableComponents/slider/slider.component";
import { ScheduleComponent } from "../../../shared/reusableComponents/schedule/schedule.component";
import { HomeModule } from '../../../shared/Modules/home/home.module';
import { ServicesComponent } from "../../../shared/reusableComponents/services/services.component";
import { BlogComponent } from "../../../shared/reusableComponents/blog/blog.component";
import { AppointmentComponent } from "../../../shared/reusableComponents/appointment/appointment.component";
import { Slider3dComponent } from "../../../shared/reusableComponents/slider3d/slider3d.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, ScheduleComponent, HomeModule, ServicesComponent, BlogComponent, AppointmentComponent, Slider3dComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
