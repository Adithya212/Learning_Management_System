import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CourseService } from '../course.service';

export interface Course {
  id: number;
  courseName: string;
  category: string;
  // enrolledDate: string;
  features: string;
  description: string;
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
  searchTerm: string = '';
  selectedCategory: string = 'all';
  isLoggedIn: boolean = false; // Default to not logged in

  courses: Course[] = [
    {
      id: 1,
      courseName: 'Java Basics',
      category: 'java',
      description: 'Learn the basics of Java programming.',
      features: 'Basic Syntax, OOP Concepts, Exception Handling'
    },
    {
      id: 2,
      courseName: 'Vue.js for Beginners',
      category: 'vue',
      description: 'An introduction to Vue.js framework.',
      features: 'Vue CLI, Components, Vue Router'
    },
    {
      id: 3,
      courseName: 'Mastering Ruby',
      category: 'ruby',
      description: 'Deep dive into Ruby programming.',
      features: 'Ruby Syntax, Rails Framework, Gems'
    },
    {
      id: 4,
      courseName: 'JavaScript Essentials',
      category: 'javascript',
      description: 'Learn the core concepts of JavaScript.',
      features: 'ES6, Async/Await, DOM Manipulation'
    },
    {
      id: 5,
      courseName: 'C++ Fundamentals',
      category: 'c++',
      description: 'Understand the basics of C++ programming.',
      features: 'Data Types, Functions, Pointers'
    },
    {
      id: 6,
      courseName: 'C Programming Basics',
      category: 'c',
      description: 'Get started with C programming.',
      features: 'Control Structures, Functions, Arrays'
    },
    {
      id: 7,
      courseName: 'C# for Developers',
      category: 'c#',
      description: 'Develop modern apps with C#.',
      features: 'Asynchronous Programming, .NET Framework'
    },
    {
      id: 8,
      courseName: 'Python for Data Science',
      category: 'python',
      description: 'Harness the power of Python for data analysis.',
      features: 'NumPy, Pandas, Data Visualization'
    },
  ];

  filteredCourses: Course[] = this.courses;

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe((data: any) => {
      this.courses = data;
      this.filteredCourses = this.courses; // Update filteredCourses after loading
      this.onSearch(); // Trigger filtering
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
  enroll(courseId: number): void {
    if (this.isLoggedIn) {
      alert(`You have enrolled in course ID: ${courseId}`);
      this.router.navigate(['/courses', courseId]); // Navigate to course page after enrollment
    } else {
      alert('Please login to enroll');
    }
  }

  // Function to handle navigation to login/signup page
  goToSignupLogin(): void {
    this.router.navigate(['/forms']); // Navigates to the signup/login component
  }
}
