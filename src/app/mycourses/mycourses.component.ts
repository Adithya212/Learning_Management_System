import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CourseService } from '../course.service';
import { EnrollmentService } from '../enrollment.service';
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
  // enrollments = {user:'',course:'',status:'',progress:'',startDate:'',completionDate:''}
  enrollments: Enrollment[]= [];
//   {
//     "user": {
//         "email":"adithyas@gmail.com"
//     },
//     "course": {
//         "id": 1
//     },
//     "status": "Enrolled",
//     "progress": 0.0,
//     "startDate": "2024-09-21T00:00:00",
//     "completionDate": "2024-09-21T00:00:00"
// }

  isLoggedIn: boolean = false;

  constructor(private router: Router, private courseService: CourseService,private enrollmentService: EnrollmentService ) {}
  searchTerm: string = '';
  selectedCategory: string = 'all';
  // console.log(helloi)
  // Sample list of courses with features
  // courses = [
  //   {
  //     id: 1,
  //     courseName: 'Java Basics',
  //     category: 'java',
  //     description: 'Learn the basics of Java programming.',
  //     features:'Basic Syntax'
  //   },
  //   {
  //     id: 2,
  //     courseName: 'Advanced Java',
  //     category: 'java',
  //     description: 'Master Java with advanced topics.',
  //     features: 'Multithreading'
  //   },
  //   {
  //     id: 3,
  //     courseName: 'Vue.js for Beginners',
  //     category: 'vue',
  //     description: 'Start building modern web apps with Vue.js.',
  //     features: 'Vue Directives'
  //   },
  //   {
  //     id: 4,
  //     courseName: 'Ruby on Rails',
  //     category: 'ruby',
  //     description: 'Web development with Ruby on Rails.',
  //     features: 'MVC Architecture'
  //   }];
 

  // filteredCourses = this.courses;

  // constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    
    this.loadCourses();
    this.loadEnrollments(); // Load enrollments on component initialization
    }
  // }

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
        alert('User enrolled successfully!');
        this.loadEnrollments(); // Refresh enrollments after enrolling
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

  // Function to handle enroll action
  // enroll(courseId: number): void {
  //   if (this.isLoggedIn) {
  //     alert(`You have enrolled in course ID: ${courseId}`);
  //   } else {
  //     alert('Please login to enroll');
  //   }
  // }

 

  // constructor(private router: Router) {}

  goToSignupLogin(): void {
    this.router.navigate(['/forms']);
    this.isLoggedIn = true; // Manually set isLoggedIn to true after signup/login
  }

  // goToSignupLogin(): void {
  //   alert(`opened`); // Navigates to the signup/login component
  // }

}
