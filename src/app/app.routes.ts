import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user-register/user-register.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    {path:'user', component:UserRegisterComponent},
    {path: 'courses', title:'Courses', component: CoursesComponent},
    {path: 'home/courses', title:'Courses', component: CoursesComponent},
    {path: 'about',title:'about', component: AboutComponent},
    {path:'contact',title:'contact',component: ContactComponent},

  
    

];
