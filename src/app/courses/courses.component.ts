import { DatePipe, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [DatePipe, NgIf, RouterOutlet, RouterLink, FormsModule, NgClass],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  isCollapsed = false;
  isMobile = false;

  currentDate: Date = new Date();

  constructor(private router: Router) {
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView.bind(this));
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeSidebar() {
    if (this.isMobile) {
      this.isCollapsed = false;
    }
  }

  checkMobileView() {
    this.isMobile = window.innerWidth <= 768;
  }

  navigateTo(section: string) {
    this.router.navigate([`/admin/${section}`]);
    this.closeSidebar(); // Close the sidebar after navigation
  }
}
