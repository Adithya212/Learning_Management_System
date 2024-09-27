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
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');  // Fetch the token from localStorage
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  getCourses(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(this.apiUrl, { headers });
  }

  addCourse(course: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(this.apiUrl, course, { headers });
  }
}
