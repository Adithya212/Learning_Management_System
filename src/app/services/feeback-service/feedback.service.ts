import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface FeedbackRequest {
  enrollmentId: number;
  comment: string;
  rating: number;
}

// feedback.model.ts
export interface Feedback {
  id: number;
  enrollment: {
    id: number;
    user: {
      id: number;
      email: string;
    };
    course: {
      id: number;
      courseName: string;
    };
  };
  comment: string;
  rating: number;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private apiUrl = 'http://localhost:8080/api/feedback';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');  // Fetch the token from localStorage
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  createFeedback(feedbackRequest: FeedbackRequest): Observable<Feedback> {
    const headers = this.getHeaders();
    return this.http.post<Feedback>(this.apiUrl, feedbackRequest, { headers });
  }

  getAllFeedbacks(): Observable<Feedback[]> {
    const headers = this.getHeaders();
    return this.http.get<Feedback[]>(`${this.apiUrl}`, { headers });
  }
}
