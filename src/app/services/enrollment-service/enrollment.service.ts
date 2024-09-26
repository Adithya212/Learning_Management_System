import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:8080/api/enrollments';  // Spring Boot API
  
  constructor(private http: HttpClient) {}

  getEnrollments(): Observable<any> {
    const token = localStorage.getItem('token');  // Fetch the token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl,{headers});
  }

  addEnrollments(enrollments: any): Observable<any> {
    const token = localStorage.getItem('token');  // Fetch the token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.apiUrl, enrollments,{headers});
  }
}
