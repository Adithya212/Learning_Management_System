import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { CourseService } from '../course.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
export interface Course {
  id: number;
  courseName: string;
  catergory: string;
  enrolledDate: string;
  features: string[];
  description: string;
}
@Component({
  selector: 'app-admin-course-management',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './admin-course-management.component.html',
  styleUrl: './admin-course-management.component.css'
})
export class AdminCourseManagementComponent {
  courses: Course[]= [];

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((data: any) => {
      this.courses = data;
    });
  }

  onAddCourseClick() {
    this.router.navigate(['/add-course']);
  }
}
