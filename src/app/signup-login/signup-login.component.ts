import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, NgModule} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-signup-login',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './signup-login.component.html',
  styleUrl: './signup-login.component.css'
})
export class SignupLoginComponent {
  isLogin: boolean = true;
  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Initialize the login and signup forms with basic required validation
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Function to toggle between Login and Signup tabs
  toggleTab(isLoginTab: boolean): void {
    this.isLogin = isLoginTab;
  }

  // Login function
  login() {
    if (this.loginForm.valid) {
      console.log('Login form data:', this.loginForm.value);
      alert('Logged in successfully!');
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/mycourses']);
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Signup function
  signup() {
    if (this.signupForm.valid) {
      console.log('Signup form data:', this.signupForm.value);
      alert('Signup successful!');
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/mycourses']);
    } else {
      alert('Please fill in all fields.');
    }
  }
}