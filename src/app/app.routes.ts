import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminCourseManagementComponent } from './admin-course-management/admin-course-management.component';
import { AdminProgressTrackingComponent } from './admin-progress-tracking/admin-progress-tracking.component';
// import { AdminUserManagementComponent } from './admin-user-management/admin-user-management.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbarComponent } from './navbar/navbar.component';


export const routes: Routes = [
    // Redirect empty path to home page
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // Main application routes
    { path: 'home', component: HomeComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'courses', title: 'Courses', component: CoursesComponent },
    { path: 'about', title: 'About', component: AboutComponent },
    { path: 'contact', title: 'Contact', component: ContactComponent },
    { path: 'mycourses', component: MycoursesComponent },
    { path: 'mycourses/:id', component: MycoursesComponent },

    // Admin routes
    { path: 'admin', component: CoursesComponent, children: [
        { path: 'course-management', component: AdminCourseManagementComponent, children: [
            { path: 'add-course', component: AddCourseComponent }
          ]
        },
        { path: 'progress-management', component: AdminProgressTrackingComponent },
        { path: 'feedback-management', component: FeedbackComponent },
    ]},

    // Signup/Login page
    { path: 'forms', component: SignupLoginComponent },

    // Admin login page
    { path: 'alogin', component: AdminloginComponent },

    // Wildcard route to catch unknown routes, but no automatic redirect to 'alogin'
    { path: '**', redirectTo: 'home' }
];
