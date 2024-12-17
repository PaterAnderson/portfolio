import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    agreed: false // New property to track checkbox state
  }

  mailTest = true;
  submitted = false;

  post = {
    endPoint: 'http://www.portfoliotw.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.submitted = true; // Mark the form as submitted

    // Check if form is valid and checkbox is checked
    if (ngForm.submitted && ngForm.form.valid && this.contactData.agreed && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.submitted = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else {
      // Reset only invalid fields
      for (const controlName in ngForm.controls) {
        if (ngForm.controls[controlName].invalid) {
          ngForm.controls[controlName].reset(); // Reset only invalid fields
        }
      }
    }
  }
}
