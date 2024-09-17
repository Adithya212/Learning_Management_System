import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CoursesComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
}
