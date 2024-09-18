import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
 
 
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadVantaTopology();
    }
  }
 
  loadVantaTopology(): void {
    if (!document.getElementById('vanta-topology-script')) {
      const script = document.createElement('script');
      script.id = 'vanta-topology-script';
      script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js';
      script.onload = () => {
        this.initializeVanta();
      };
      document.body.appendChild(script);
    } else {
      this.initializeVanta();
    }
  }
 
  initializeVanta(): void {
    if (window['VANTA']) {
      window['VANTA'].BIRDS({
      el: "#vanta-top",
      mouseControls: true,
      
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x76cf7,
      color1: 0x312222,
      colorMode: "variance",
      birdSize: 1.90,
      wingSpan: 23.00,
      speedLimit: 6.00,
      separation: 40.00,
      alignment: 31.00,
      cohesion: 31.00,
      backgroundAlpha: 0.45
    });
  }
  }
}
 
declare global {
  interface Window {
    VANTA: any;
  }
}