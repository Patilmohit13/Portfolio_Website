import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, // Ensure it's standalone
  imports: [RouterLink, RouterLinkActive], // Import necessary modules for routing
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  developerName = "Portfolio"; // Placeholder name
}
