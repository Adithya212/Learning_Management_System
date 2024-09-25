import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:8080/api/enrollments';  // Spring Boot API
  
  constructor(private http: HttpClient) {}

  getEnrollments(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addEnrollments(enrollments: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, enrollments);
  }
}
