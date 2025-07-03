import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true, // Mark as standalone
  imports: [], // No specific Angular module imports needed for this basic footer
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear: number = new Date().getFullYear();
  developerName: string = "Developer Name"; // Replace with actual name or inject/configure
}
