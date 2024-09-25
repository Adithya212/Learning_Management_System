import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SafeUrlPipe } from '../safe-url.pipe';
declare var YT: any;

@Component({
  selector: 'app-enroll-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgClass,SafeUrlPipe],
  templateUrl: './enroll-page.component.html',
  styleUrl: './enroll-page.component.css'
})
export class EnrollPageComponent implements OnInit {
  videoUrl!: string; // To store the video URL
  isVideoCompleted: boolean = false; // To track if the video is completed
  assessmentLink: string = '/assessment'; // Link to the assessment page

  player: any;

  ngOnInit(): void {
    // Set your video URL
    this.videoUrl = 'https://youtu.be/xs7tN0A7RC8?si=5FXbXI6WtXce-1UO'; // Replace with your video URL
    this.loadYouTubePlayer();
  }

  loadYouTubePlayer() {
    if ((window as any).YT && (window as any).YT.Player) {
      this.createPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = () => this.createPlayer();
    }
  }

  createPlayer() {
    const iframe = document.getElementById('player-iframe');
    this.player = new YT.Player(iframe, {
      events: {
        'onStateChange': (event: any) => this.onPlayerStateChange(event)
      }
    });
  }

  onPlayerStateChange(event: any) {
    if (event.data === YT.PlayerState.ENDED) {
      this.isVideoCompleted = true; // Mark the video as completed
    }
  }
}
