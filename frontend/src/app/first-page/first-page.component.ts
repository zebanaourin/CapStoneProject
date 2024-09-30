import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {
  showPopup = false; 

  constructor(private router: Router) {} 

  togglePopup() {
    this.showPopup = !this.showPopup; 
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/signup']); 
  }
}
