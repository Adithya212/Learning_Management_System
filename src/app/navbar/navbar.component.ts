import { Component } from '@angular/core';
import { DatePipe, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AccountService } from '../services/auth-service/account.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DatePipe, FormsModule, NgIf,RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
  export class NavbarComponent {
    isMenuOpen = false;
  router: any;

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
   constructor(private accountService: AccountService ){}

    logout(): void {
      this.accountService.logout(); // Clears token and redirects if needed
    }
    // logout() {
    //   localStorage.removeItem('loggedIn');  // Clear login status from localStorage
    //   this.router.navigate(['/home']);      // Navigate back to login page after logout
    // }
  
    currentDate: Date=new Date();
  
  }
  
