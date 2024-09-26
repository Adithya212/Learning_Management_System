import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8080/auth/signup';  // Backend URL

  constructor(private http: HttpClient) { }

  // Signup API call
  signup(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, userData);
  }

  // Login API call
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // Token validation API call
  validateToken(token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get(`${this.baseUrl}/validate-token`, { headers });
  }
}
