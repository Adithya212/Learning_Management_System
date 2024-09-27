import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminCourseManagementComponent } from './admin-course-management/admin-course-management.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { AdminProgressTrackingComponent } from './admin-progress-tracking/admin-progress-tracking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, AddCourseComponent, AdminCourseManagementComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearningManagementSystem';
}
