import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private apiUrl = 'http://localhost:8080/api/progress';  // Spring Boot API

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');  // Fetch the token from localStorage
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Method to update progress
  updateProgress(progress: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(this.apiUrl, progress, { headers });
  }

  // Method to get progress
  getProgress(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
