import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../services/progress-service/progress.service';

@Component({
  selector: 'app-admin-progress-tracking',
  templateUrl: './admin-progress-tracking.component.html',
  styleUrls: ['./admin-progress-tracking.component.css']
})
export class AdminProgressTrackingComponent implements OnInit {
  progressList: any[] = []; // To store the fetched progress data

  constructor(private progressService: ProgressService) {}

  ngOnInit(): void {
    this.fetchProgress();
  }

  fetchProgress(): void {
    this.progressService.getProgress().subscribe(
      (data: any) => {
        this.progressList = data;
      },
      (error) => {
        console.error('Error fetching progress data', error);
      }
    );
  }

  // Optionally, a method to update progress can be added:
  updateProgress(progress: any): void {
    this.progressService.updateProgress(progress).subscribe(
      (response: any) => {
        console.log('Progress updated successfully', response);
        this.fetchProgress();  // Refresh progress after update
      },
      (error) => {
        console.error('Error updating progress', error);
      }
    );
  }
}
