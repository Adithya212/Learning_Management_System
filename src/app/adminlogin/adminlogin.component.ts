import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  login() {
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password123';

    if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
      console.log('Login successful!');  // Debugging
      localStorage.setItem('loggedIn', 'true');  // Set login status
      this.router.navigate(['/courses']);  // Navigate to the admin page after login
    } else {
      console.log('Invalid credentials!');  // Debugging
      this.loginError = true;  // Show error message for invalid credentials
    }
  }

}
