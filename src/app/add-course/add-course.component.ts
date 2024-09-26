import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../services/course-service/course.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  course = { courseName: '',category: '',features: '', description: '' ,videoUrl: ''};

  constructor(private router: Router, private courseService: CourseService) {}

  onSubmit() {
    // Check for missing inputs
    if (!this.course.courseName || !this.course.category || !this.course.features || !this.course.description || !this.course.videoUrl) {
      alert('Error: Please fill in all fields before submitting the form.');
      return; // Stop the submission if any field is empty
    }

    this.courseService.addCourse(this.course).subscribe(
      () => {
        alert('Course added successfully!'); // Success message
        this.router.navigate(['/admin']); // Redirect after submission
      },
      (error) => {
        alert('Error: There was an issue adding the course.'); // Error message in case of failure
      }
    );
  }
}
