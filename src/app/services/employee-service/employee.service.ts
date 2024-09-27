import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/auth/users';  // Spring Boot API
  constructor(private http: HttpClient) {}
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');  // Fetch the token from localStorage
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  getAllUsers(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(this.apiUrl, { headers });
  }
  getCurrentUserEmail(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log(payload.email);
        return payload.email;  // Assuming the email is stored in the token
    
      } catch (e) {
        console.error('Error decoding token', e);
        return null;
      }
    }
    return null;
  }

}