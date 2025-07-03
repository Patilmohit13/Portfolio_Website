import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Import RouterLink

@Component({
  selector: 'app-home',
  standalone: true, // Mark as standalone
  imports: [RouterLink], // Add RouterLink to imports
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  developerName: string = "Jane Doe"; // Placeholder
  tagline: string = "Passionate Full-Stack Developer creating modern and responsive web applications."; // Placeholder
  // You can add more properties here if needed, e.g., for an image URL
}
