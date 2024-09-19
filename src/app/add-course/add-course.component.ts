import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  course = { courseName: '',category: '',features: '', description: '' };

  constructor(private router: Router, private courseService: CourseService) {}

  onSubmit() {
    console.log(this.course);
    this.courseService.addCourse(this.course).subscribe(() => {
      
      this.router.navigate(['/admin']);
      
    });
    alert(`Course added successfully`)
  }
}
