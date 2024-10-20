import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Schems } from '../../../core/constants/schems';

@Component({
  selector: 'app-schemes-section',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './schemes-section.component.html',
  styleUrl: './schemes-section.component.css'
})
export class SchemesSectionComponent {
  Schems = Schems;
}
