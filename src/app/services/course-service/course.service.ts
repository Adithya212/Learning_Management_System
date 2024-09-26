import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/api/courses';  // Spring Boot API
  //  token = localStorage.getItem('token');  // Fetch the token from localStorage
  //  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    const token = localStorage.getItem('token');  // Fetch the token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(this.apiUrl, { headers });
  }

  addCourse(course: any): Observable<any> {
    const token = localStorage.getItem('token');  // Fetch the token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.apiUrl, course);
  }

}
