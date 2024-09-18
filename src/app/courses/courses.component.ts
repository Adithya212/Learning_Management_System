import { DatePipe, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [DatePipe,NgIf,RouterOutlet,RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  
  }
  currentDate: Date=new Date();


  constructor(private router: Router) {}

  navigateTo(section: string) {
    this.router.navigate([`/admin/${section}`]);
  }
}
