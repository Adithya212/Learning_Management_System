import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/api/courses';  // Spring Boot API
  
  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addCourse(course: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, course);
  }
  // enrollUser(userId: number, courseId: number): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/enrollments/enroll?userId=${userId}&courseId=${courseId}`, {});
  // }

  // getCourseEnrollments(courseId: number): Observable<any> {
  //   return this.http.get<>(`${this.apiUrl}/enrollments/course/${courseId}`);
  // }
}
