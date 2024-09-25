import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminCourseManagementComponent } from './admin-course-management/admin-course-management.component';
import { AdminProgressTrackingComponent } from './admin-progress-tracking/admin-progress-tracking.component';
import { AdminUserManagementComponent } from './admin-user-management/admin-user-management.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';

import { UserRegisterComponent } from './user-register/user-register.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EnrollPageComponent } from './enroll-page/enroll-page.component';



export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },

    {path:'user', component:UserRegisterComponent},
    {path: 'courses', title:'Courses', component: CoursesComponent},
    {path: 'home/courses', title:'Courses', component: CoursesComponent},
    {path: 'about',title:'about', component: AboutComponent},
    {path:'contact',title:'contact',component: ContactComponent},
    // {path:'home/courses/signup', component:SignupComponent},

    {path:'mycourses', component:MycoursesComponent},
    {path:'mycourses/:id', component:MycoursesComponent},
    { path: 'add-course', component: AddCourseComponent },

    { path: 'admin', component: CoursesComponent, children: [
        { path: 'user-management', component: AdminUserManagementComponent },
        { path: 'course-management', component: AdminCourseManagementComponent, children: [
            { path: 'add-course', component: AddCourseComponent }
          ]
        },
        { path: 'progress-management', component: AdminProgressTrackingComponent },
        { path: 'feedback-management', component: FeedbackComponent },
    ]},

    // {path:'mycourses', component:MycoursesComponent},
    {path:'forms',component:SignupLoginComponent},
    {path:'', redirectTo:'mycourses', pathMatch: 'full'},

    // { path: 'enroll', component: EnrollPageComponent },
];
