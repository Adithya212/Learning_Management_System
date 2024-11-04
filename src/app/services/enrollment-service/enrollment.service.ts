import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:8080/api/enrollments';  // Spring Boot API
  
  constructor(private http: HttpClient) {}
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');  // Fetch the token from localStorage
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  getEnrollments(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(this.apiUrl,{headers});
  }
  getEnrollmentsByUserId(userId: number): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/users/${userId}`,{headers});
  }

  addEnrollments(enrollments: any): Observable<any> {
      const headers = this.getHeaders();
    return this.http.post<any>(this.apiUrl, enrollments,{headers});
  }
}
