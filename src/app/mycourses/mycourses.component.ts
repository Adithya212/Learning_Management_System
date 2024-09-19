import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CourseService } from '../course.service';
export interface Course {
  id: number;
  courseName: string;
  category: string;
  enrolledDate: string;
  features: string[];
  description: string;
}
@Component({
  selector: 'app-mycourses',
  standalone: true,
  imports: [RouterLink,NgFor,NgIf,FormsModule,UpperCasePipe],
  templateUrl: './mycourses.component.html',
  styleUrl: './mycourses.component.css'
})
export class MycoursesComponent{
  courses: Course[]= [];

  constructor(private router: Router, private courseService: CourseService) {}
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
  //   }]
  //   {
  //     id: 2,
  //     title: 'Advanced Java',
  //     category: 'java',
  //     description: 'Master Java with advanced topics.',
  //     features: ['Multithreading', 'Streams API', 'Design Patterns']
  //   },
  //   {
  //     id: 3,
  //     title: 'Vue.js for Beginners',
  //     category: 'vue',
  //     description: 'Start building modern web apps with Vue.js.',
  //     features: ['Vue Directives', 'Component Lifecycle', 'Vue Router']
  //   },
  //   {
  //     id: 4,
  //     title: 'Ruby on Rails',
  //     category: 'ruby',
  //     description: 'Web development with Ruby on Rails.',
  //     features: ['MVC Architecture', 'Active Record', 'REST APIs']
  //   },
  //   {
  //     id: 5,
  //     title: 'JavaScript Essentials',
  //     category: 'javascript',
  //     description: 'Become proficient in JavaScript.',
  //     features: ['DOM Manipulation', 'ES6 Features', 'Asynchronous JS']
  //   },
  //   {
  //     id: 6,
  //     title: 'C++ Programming',
  //     category: 'c++',
  //     description: 'Dive deep into C++ programming.',
  //     features: ['Memory Management', 'STL', 'Object-Oriented Programming']
  //   },
  //   {
  //     id: 7,
  //     title: 'C Programming Basics',
  //     category: 'c',
  //     description: 'Get started with C programming.',
  //     features: ['Pointers', 'Memory Allocation', 'Data Types']
  //   },
  //   {
  //     id: 8,
  //     title: 'C# for Developers',
  //     category: 'c#',
  //     description: 'Develop modern apps with C#.',
  //     features: ['LINQ', 'Entity Framework', 'Asynchronous Programming']
  //   },
  //   {
  //     id: 9,
  //     title: 'Python for Data Science',
  //     category: 'python',
  //     description: 'Python for data analysis and machine learning.',
  //     features: ['Pandas', 'NumPy', 'Scikit-learn']
  //   }
  // ];

  filteredCourses = this.courses;


  ngOnInit(): void {
    console.log(this.courses);
    this.loadCourses();
    console.log(this.courses);
    this.filteredCourses = this.courses;
    console.log(this.filteredCourses);
    debugger;
    // console.log(this.filteredCourses);
    // this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((data: any) => {
      this.courses = data;
    });
  }

  // Function to filter courses based on the search term
  onSearch(): void {
    this.filteredCourses = this.courses.filter(course => 
      course.courseName.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory === 'all' || course. category === this.selectedCategory)
    );
  }

  // Function to handle category change
  onCategoryChange(event: any): void {
    this.filteredCourses = this.courses.filter(course => 
      (this.selectedCategory === 'all' || course.category === this.selectedCategory) &&
      course.courseName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Function to handle enroll action
  enroll(courseId: number): void {
    if (this.isLoggedIn) {
      alert(`You have enrolled in course ID: ${courseId}`);
    } else {
      alert('Please login to enroll');
    }
  }

 

  constructor(private router: Router) {}

  goToSignupLogin(): void {
    
    this.router.navigate(['/forms']); // Navigates to the signup/login component
   
  }

  // goToSignupLogin(): void {
  //   alert(`opened`); // Navigates to the signup/login component
  // }

}