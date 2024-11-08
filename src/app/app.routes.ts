import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminCourseManagementComponent } from './admin-course-management/admin-course-management.component';
import { AdminProgressTrackingComponent } from './admin-progress-tracking/admin-progress-tracking.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthGuard } from './services/auth-service/auth.guard';
import { EnrolledCourseVideosComponent } from './enrolled-course-videos/enrolled-course-videos.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    {path: 'courses', title:'Courses', component: CoursesComponent},
    {path: 'home/courses', title:'Courses', component: CoursesComponent},
    {path: 'about',title:'about', component: AboutComponent},
    {path:'contact',title:'contact',component: ContactComponent},
    {path:'mycourses', component:MycoursesComponent},
    {path:'mylearning', component:EnrolledCourseVideosComponent},
    {path:'mycourses/:id', component:MycoursesComponent},
    { path: 'add-course', component: AddCourseComponent },
    { path: 'admin', component: CoursesComponent, children: [
        { path: 'course-management', component: AdminCourseManagementComponent, children: [
            { path: 'add-course', component: AddCourseComponent }
          ]
        },
        { path: 'progress-management', component: AdminProgressTrackingComponent },
        { path: 'feedback-management', component: FeedbackComponent },
    ]},

    {path:'forms',component:SignupLoginComponent},
    {path:'', redirectTo:'mycourses', pathMatch: 'full'},


    { path: 'alogin', component: AdminloginComponent },  // Route for login page
    { path: 'courses', component: CoursesComponent ,canActivate: [AuthGuard] },  // Route for admin panel
    { path: '', redirectTo: '/alogin', pathMatch: 'full' },  // Default route to login
    { path: '**', redirectTo: '/alogin' } 
];