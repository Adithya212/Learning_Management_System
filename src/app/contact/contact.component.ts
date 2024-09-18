import { DatePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf,DatePipe,RouterOutlet,RouterLink,ReactiveFormsModule,ContactComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  currentDate: Date=new Date();



  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      alert('Your message has been sent successfully!');
      this.contactForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }




  

}
