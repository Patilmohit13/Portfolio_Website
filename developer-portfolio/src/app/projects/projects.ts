import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngFor, *ngIf

// Define the Project interface
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string; // Optional
  liveUrl?: string;  // Optional
  sourceUrl?: string; // Optional
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // Import CommonModule
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website (This one!)',
      description: 'A responsive personal portfolio website built with Angular to showcase my skills and projects. Features a modern UI and clean design.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5'],
      imageUrl: 'assets/images/project-portfolio.png', // Placeholder - create this image or update path
      liveUrl: '#', // Link to the current site
      sourceUrl: 'https://github.com/yourusername/developer-portfolio' // Placeholder
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A feature-rich e-commerce platform with product listings, shopping cart, user authentication, and an admin panel for managing products and orders.',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      imageUrl: 'assets/images/project-ecommerce.png', // Placeholder
      liveUrl: '#', // Placeholder
      sourceUrl: 'https://github.com/yourusername/ecommerce-platform' // Placeholder
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application allowing users to create, assign, and track tasks within projects. Real-time updates and notifications.',
      technologies: ['React', 'Firebase', 'Material UI', 'Node.js'],
      imageUrl: 'assets/images/project-task-app.png', // Placeholder
      // liveUrl: '#', // Example: No live URL
      sourceUrl: 'https://github.com/yourusername/task-manager' // Placeholder
    }
    // Add more projects as needed
  ];

  constructor() {
    // In a real application, you might fetch this data from a service or a JSON file.
  }
}
