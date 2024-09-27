import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CourseService } from '../services/course-service/course.service';
import { EnrollmentService } from '../services/enrollment-service/enrollment.service';
export interface Course {
  id: number;
  courseName: string;
  category: string;
  // enrolledDate: string;
  features: string;
  description: string;
}
export interface Enrollment {
  user: {
    email: string;
  };
  course: {
    id: number;
    // name: string;  // Add name if you are including it from the backend
  };
  status: string;
  progress: number;
  startDate: string;
  completionDate: string;
}

@Component({
  selector: 'app-mycourses',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, FormsModule, UpperCasePipe],
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css'],
  encapsulation: ViewEncapsulation.None, 
})
export class MycoursesComponent implements OnInit {

  courses: Course[]= [];
  filteredCourses: Course[] = [];
  enrollments: Enrollment[]= [];


  isLoggedIn: boolean = false;

  constructor(private router: Router, private courseService: CourseService,private enrollmentService: EnrollmentService ) {}
  searchTerm: string = '';
  selectedCategory: string = 'all';
   ngOnInit(): void {
    
    this.loadCourses();
    this.loadEnrollments(); // Load enrollments on component initialization
    }
 

  loadCourses(): void {
    this.courseService.getCourses().subscribe((data: any) => {
      this.courses = data;
      this.filteredCourses = this.courses; // Update filteredCourses after loading
      this.onSearch(); // Trigger filtering
      this.filteredCourses = this.courses; 
    });
  }
  loadEnrollments() {
    this.enrollmentService.getEnrollments().subscribe((data:Enrollment[]) => {
      this.enrollments = data;
    });
  }

  // On Enroll button click
  enroll(courseId: number) {
    const email = "adithyas@gmail.com"; // For demonstration purposes, we assume userId = 1 (logged-in user)

    const enrollmentData = {
      email: email,        // Assuming userId is available
      courseId: courseId     // Course being enrolled
    };

    this.enrollmentService.addEnrollments(enrollmentData).subscribe({
      next: () => {
        alert('User ennot rolled successfully!');
        this.router.navigate(['enrolled']);
        this.loadEnrollments();
        
         // Refresh enrollments after enrolling
      },
      error: (error) => {
        alert('Enrollment failed! Error: ' + error.message);
      }
    });
   
  }

  // Function to filter courses based on the search term and category
  onSearch(): void {
    this.filteredCourses = this.courses.filter(course => 
      course.courseName.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory === 'all' || course.category === this.selectedCategory)
    );
  }

  // Function to handle category change
  onCategoryChange(event: any): void {
    this.onSearch(); // Re-filter the courses whenever the category changes
  }

  goToSignupLogin(): void {
    this.router.navigate(['/forms']);
    this.isLoggedIn = true; // Manually set isLoggedIn to true after signup/login
  }

}
