import { Component } from '@angular/core';
import { Slider3dComponent } from "../../../shared/reusableComponents/slider3d/slider3d.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Slider3dComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
