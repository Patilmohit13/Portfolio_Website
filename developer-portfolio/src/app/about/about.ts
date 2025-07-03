import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true, // Ensure it's standalone
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  // Placeholder for any properties if needed in the future
  // For example, if skills were fetched from a service:
  // skills: string[] = ['Angular', 'TypeScript', ...];

  constructor() {
    // You can replace "[Developer Name]" and other placeholders directly in the HTML
    // or manage them here and bind them to the template.
    // For simplicity in this phase, they are static in the HTML.
  }
}
