import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { CourseService } from '../services/course-service/course.service';
import { EnrollmentService } from '../services/enrollment-service/enrollment.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
export interface Course {
  id: number;
  courseName: string;
  category: string;
  enrolledDate: string;
  features: string[];
  description: string;
}
export interface Enrollment {
  user: {
    email: string;
  };
  course: {
    id: number;
  };
  status: string;
  progress: number;
  startDate: string;
  completionDate: string;
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
  enrolled: Enrollment[]=[];

  constructor(private router: Router, private courseService: CourseService,private enrollmentService: EnrollmentService) {}

  ngOnInit() {
    this.loadCourses();
    this.loadEnrollment();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((data: any) => {
      this.courses = data;
    });
  }
  loadEnrollment(){
    this.enrollmentService.getEnrollments().subscribe((data: any) => {
      this.enrolled= data;
      console.log("returned getenroll data is ; ",this.enrolled);
  });
}
  onAddCourseClick() {
    this.router.navigate(['/add-course']);
  }
}
