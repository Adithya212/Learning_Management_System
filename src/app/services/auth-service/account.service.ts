import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8080/auth';  // Backend URL
  router: any;

  constructor(private http: HttpClient) { }

  // Signup API call
  signup(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userData);
  }

  // Login API call
  // login(credentials: any): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.post(`${this.baseUrl}/login`, credentials, { headers });
  //   // return this.http.post(`${this.baseUrl}/login`, credentials);
  // }
  login(credentials: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.baseUrl}/login`, credentials, { headers }).pipe(
      map((response) => {
        localStorage.setItem('token', response.token); // Store JWT on successful login
        return response;
      }),
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(() => new Error('AAAAAA..Login failed, please check your credentials.'));
      })
    );
  }
 
  logout() {
    console.log('clicked!')
    localStorage.removeItem('token'); // Clear JWT from local storage
    this.router.navigate(['/home']); // Redirect to login page
  }
  getEmployeeIdByEmail(email: string): Observable<number> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`  // Add token for authorization
    });
    return this.http.get<number>(`${this.baseUrl}/${email}`, { headers });
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
getCurrentUserEmployeeId(): Observable<number> {
  const email = this.getCurrentUserEmail();  // Fetch the email from the token
  if (email) {
    return this.getEmployeeIdByEmail(email);  // Pass the email to getEmployeeIdByEmail method
  } else {
    // Instead of returning null, return an observable that emits an error or a default value
    return throwError(() => new Error('No email found in token'));  // Error handling as an Observable
  }
}
}


