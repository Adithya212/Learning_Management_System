import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Feedback, FeedbackService } from '../services/feeback-service/feedback.service';
import { CommonModule } from '@angular/common';
// import { FeedbackService, Feedback } from ..../services/feedback-service/feedback.service;

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.fetchFeedbacks();
  }
  // data: any) 
  fetchFeedbacks(): void {
    this.feedbackService.getAllFeedbacks().subscribe(
      (data: any) => {
        this.feedbacks = data;
      }
      ,
      (error) => {
        console.error('Error fetching feedbacks', error);
      }
    );
  }
}
