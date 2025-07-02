import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf if used for conditional display

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule], // CommonModule might be useful for *ngIf, etc.
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  email: string = "your.email@example.com"; // Placeholder
  linkedinUrl: string = "https://linkedin.com/in/yourusername"; // Placeholder
  githubUrl: string = "https://github.com/yourusername"; // Placeholder
  // Add other contact details or social links as needed

  // For a functional form later, you'd use FormGroup here with ReactiveFormsModule
  // contactForm: FormGroup;

  constructor() {
    // If using ReactiveFormsModule:
    // this.contactForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   subject: new FormControl(''),
    //   message: new FormControl('', Validators.required)
    // });
  }

  onSubmit() {
    // This method would handle form submission if the form were functional
    // console.log('Form submitted!', this.contactForm.value);
    // For now, it's just a placeholder
    alert('Contact form submitted (visually only - no data sent).');
  }
}
