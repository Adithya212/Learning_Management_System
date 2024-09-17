import { DatePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf,DatePipe,RouterOutlet,RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  currentDate: Date=new Date();
}
