import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, NgModule} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-signup-login',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './signup-login.component.html',
  styleUrl: './signup-login.component.css'
})
export class SignupLoginComponent {
  isLogin: boolean = true;

  // Data models for form inputs
  loginData:any = { email: '',
                    password: '' };
  signupData = { username: '', email: '', password: '' };
  router: any;

  constructor(private routerS: Router) {}

  // Function to toggle between Login and Signup tabs
  toggleTab(isLoginTab: boolean): void {
    this.isLogin = isLoginTab;
  }

  // Login function
  // login(): void {
  //   // Implement login logic here
  //   alert(`Logged in as: ${this.loginData.username}`);
  //   // this.accService.login(this.loginData).subscribe((res:any)=>{

  //   // })
  // }



  login() {
    // Perform login logic here
    if (this.loginData.username && this.loginData.password) {
      // Assuming login is successful, redirect to the MyCourses page

      alert(`Logged SUCCESSFULLY`)
      localStorage.setItem('isLoggedIn', 'true');
      this.routerS.navigate(['/mycourses']);  // Redirect to MyCourses
    } else {
      // Handle login failure
      console.error('Invalid login details');
    }
  }

  // Signup function
  signup() {
    // Perform signup logic here
    if (this.signupData.username && this.signupData.email && this.signupData.password) {
      // Assuming signup is successful, redirect to the MyCourses page
      alert(`SignUp Successful`)
      localStorage.setItem('isLoggedIn', 'true');
      this.routerS.navigate(['/mycourses']);  // Redirect to MyCourses
    } else {
      // Handle signup failure
      console.error('Invalid signup details');
    }
  }
}