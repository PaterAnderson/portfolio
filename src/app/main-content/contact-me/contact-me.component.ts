import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    agreed: false
  }

  mailTest = true;
  submitted = false;
  buttonClicked = false;

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
    this.submitted = true;

    if (ngForm.valid && this.contactData.agreed) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.submitted = false;
            this.showGreenBorder();
          },
          error: (error) => {
            console.error('Error submitting form', error);
          },
          complete: () => console.info('send post complete'),
        });
    } else {
      this.resetInvalidFields(ngForm);
    }
  }

  /**
   * Resets all invalid form input fields in the given form.
   * 
   * @param {NgForm} ngForm - The Angular form whose invalid fields should be reset.
   */
  resetInvalidFields(ngForm: NgForm) {
    for (const controlName in ngForm.controls) {
      const control = ngForm.controls[controlName];
      if (control.invalid) {
        control.reset();
      }
    }
  }

  /**
   * Displays a green border for 3 seconds after the button is pressed.
   * 
   * Sets the `buttonClicked` property to true to indicate the button's state, 
   * and resets it back to false after 3 seconds.
   */
  showGreenBorder() {
    this.buttonClicked = true;
    setTimeout(() => {
      this.buttonClicked = false;
    }, 3000);
  }
}
