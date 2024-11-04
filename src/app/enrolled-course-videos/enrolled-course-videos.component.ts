import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ProgressService } from '../services/progress-service/progress.service';
import { EnrollmentService } from '../services/enrollment-service/enrollment.service';
import { AccountService } from '../services/auth-service/account.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { Enrollment } from '../models/enrollment.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-enrolled-course-videos',
  standalone: true,
  imports: [FormsModule,NgIf,NgForOf],
  templateUrl: './enrolled-course-videos.component.html',
  styleUrl: './enrolled-course-videos.component.css'
})
export class EnrolledCourseVideosComponent  implements OnInit {
  enrollments: Enrollment[] = [];
  currentUserId: number = 0;

  constructor(
    private enrollmentService: EnrollmentService,
    private authService: AccountService,
    private sanitizer: DomSanitizer ) {}

 
  ngOnInit(): void {
    this.authService.getCurrentUserEmployeeId().subscribe(
      (id: number) => {
        this.currentUserId = id; 
        console.log(this.currentUserId);
        this.loadEnrolledCourses();  // Load courses after getting the ID
      },
      (error) => {
        console.error('Error fetching user ID:', error);  // Handle the error, e.g., email not found
        // You can add additional error handling logic here, like showing an alert
      }
    );
  }
  

  loadEnrolledCourses(): void {
    this.enrollmentService.getEnrollmentsByUserId(this.currentUserId).subscribe(
      (data: any) => {
        this.enrollments = data;
        console.log(this.enrollments)
      },
      (error) => {
        console.error('Error fetching enrolled courses', error);
      }
    );
  }

  // To safely embed the video URL
  getEmbedUrl(videoUrl: string): SafeResourceUrl {
    const trustedUrl = videoUrl.replace("watch?v=", "embed/");
    return this.sanitizer.bypassSecurityTrustResourceUrl(trustedUrl);
  }
  

}
