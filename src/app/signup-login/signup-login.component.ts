import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AccountService } from '../services/auth-service/account.service';

@Component({
  selector: 'app-signup-login',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './signup-login.component.html',
  styleUrl: './signup-login.component.css'
})
export class SignupLoginComponent {
  isLogin: boolean = true;
  loginForm: FormGroup;
  signupForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private accountService: AccountService,private http: HttpClient ) {
    // Initialize the login and signup forms with basic required validation
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(3)]]
    });
  }

  // Function to toggle between Login and Signup tabs
  toggleTab(isLoginTab: boolean): void {
    this.isLogin = isLoginTab;
  }


   // Login function
   login() {
    // if (this.loginForm.valid) {
    //   const loginData = this.loginForm.value;
    //   console.log(loginData);
    //   // Call login API via AccountService
    //   this.accountService.login(loginData).subscribe({
    //     next: (response) => {
    //       alert('Logged in successfully!');
    //       localStorage.setItem('token', response.token);  // Store JWT token
    //       this.router.navigate(['/mycourses']);  // Navigate to protected route
    //     },
    //     error: () => {
    //       alert('Login failed. Check credentials.');
    //     }
    //   });
    // }
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('NOTE: Sending login data:', loginData);
      
      this.accountService.login(loginData).subscribe({
        next: (response) => {
          console.log('Login response:', response);
          alert('Logged in successfully!');
          localStorage.setItem('token', response.token);
          this.router.navigate(['/mycourses']);
        },
        error: (error) => {
          console.error('Login error:', error);
          alert('Login failed. Error: ' + (error.error?.message || error.statusText));
        }
      });
    }
  }
  
   // Signup function
   signup() {
    if (this.signupForm.valid) {
      const signupData = this.signupForm.value;

      // Call signup API via AccountService
      this.accountService.signup(signupData).subscribe({
        next: (response) => {
          alert('Signup successful!');
          localStorage.setItem('token', response.token);  // Store JWT token
          this.router.navigate(['/mycourses']);  // Navigate to protected route
        },
        error: (err) => {
          console.log(signupData);
          alert('Sign Up failed: ' + err.error.message);
        }
      });
    }
  }

}