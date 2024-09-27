import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8080/auth';  // Backend URL

  constructor(private http: HttpClient) { }

  // Signup API call
  signup(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userData);
  }

  // Login API call
  login(credentials: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.baseUrl}/login`, credentials, { headers });
    // return this.http.post(`${this.baseUrl}/login`, credentials);
  }
  getEmployeeIdByEmail(email: string): Observable<number> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`  // Add token for authorization
    });
    return this.http.get<number>(`${this.baseUrl}/employee/${email}`, { headers });
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
   // Get Employee ID of the current user
   getCurrentUserEmployeeId(): Observable<number> | null {
    const email = this.getCurrentUserEmail();  // Fetch the email from the token
    if (email) {
      return this.getEmployeeIdByEmail(email);  // Pass the email to getEmployeeIdByEmail method
    }
    return null;
  }
  // Token validation API call
  validateToken(token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get(`${this.baseUrl}/validate-token`, { headers });
  }
}


