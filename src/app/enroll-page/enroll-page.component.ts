import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CourseService } from '../services/course-service/course.service';
import { EnrollmentService } from '../services/enrollment-service/enrollment.service';
import { FormsModule } from '@angular/forms';
declare var YT: any;
export interface Course {
  id: number;
  courseName: string;
  category: string;
  enrolledDate: string;
  features: string;
  description: string;
  videoUrl: string; // Video URL
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
  selector: 'app-enroll-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgClass,FormsModule,NgFor],
  templateUrl: './enroll-page.component.html',
  styleUrl: './enroll-page.component.css'
})
export class EnrollPageComponent{

  // courses :Course[]=[];
  // enroll:Enrollment[]=[];
  // currentVideoUrl = '';
  // currentCourseId=0;
  // progressPercentage = 0;
  // constructor(private enrollService: EnrollmentService) { }

  // ngOnInit(): void {
  //   this.loadEnrolledCourses();
  // }

  // loadEnrolledCourses() {
  //   // Fetch enrolled courses (use actual userId)
  //   this.enrollService.getEnrollments().subscribe(data => {
  //     this.enroll = data;
  //   });
  // }

  // playVideo(courseId: number, videoUrl: string) {
  //   this.currentCourseId = courseId;
  //   this.currentVideoUrl = videoUrl;
  //   this.progressPercentage = 0; // reset progress for a new video
  // }

}
