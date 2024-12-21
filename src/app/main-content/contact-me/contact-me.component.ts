import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ CommonModule ,FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    agreed: false // Tracking checkbox state
  }

  mailTest = true;
  submitted = false;

  namePlaceholder = $localize`:@@Your name goes here:Your name goes here`;
  emailPlaceholder = $localize`:@@youremail@email.com:youremail@email.com`;
  messagePlaceholder = $localize`:@@Hello Tom, I am interested in...:Hello Tom, I am interested in...`;

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

    // Console log for debugging: check form validity and checkbox state
    console.log('Form submitted. Checking validity...');
    console.log('Form Valid:', ngForm.valid);
    console.log('Checkbox Checked:', this.contactData.agreed);
    console.log('Form Data:', this.contactData);

    // Überprüfen, ob das Formular gültig ist und die Checkbox akzeptiert wurde
    if (ngForm.valid && this.contactData.agreed) {
      console.log('Sending data...'); // Log before sending the data
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('Form successfully submitted', response);
            ngForm.resetForm();
            this.submitted = false; // Reset the form state
          },
          error: (error) => {
            console.error('Error submitting form', error);
          },
          complete: () => console.info('send post complete'),
        });
    } else {
      // Log if the form is invalid
      console.log('Form invalid or checkbox not checked. Resetting invalid fields...');
      // Reset the form fields for only invalid controls
      this.resetInvalidFields(ngForm);
    }
  }

  resetInvalidFields(ngForm: NgForm) {
    for (const controlName in ngForm.controls) {
      const control = ngForm.controls[controlName];
      if (control.invalid) {
        control.reset(); // Reset invalid fields
      }
    }
  }
}
