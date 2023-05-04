import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;

  showMessage: boolean = false;

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    text: ''
  });

  constructor(private formBuilder: FormBuilder) {

  }

  /*
  * Sends the form data to the backend for php request.
  */
  onSubmit() {
    this.inputValidation();
  }


  inputValidation() {
    // RFC 2822 standard email validation
    let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (this.checkoutForm.value.email && !re.test(this.checkoutForm.value.email)) {
      alert("Please enter a valid email address...");
    } else if (this.inputsNotEmpty()) {
      this.collectAndSendData();
      this.deactivateInputFields();
      this.showMessageAnimation();
      this.clearInputFields();
    }
  }


  inputsNotEmpty() {
    return this.checkoutForm.value.name && this.checkoutForm.value.email && this.checkoutForm.value.text;
  }

  /**
   * POST request to url with php file.
   */
  async collectAndSendData() {
    let formData = new FormData();
      formData.append("name", this.checkoutForm.value.name!);
      formData.append("email", this.checkoutForm.value.email!);
      formData.append("text", this.checkoutForm.value.text!);
      await fetch('https://frederic-rieg.de/send_mail.php',
        {
          method: "POST",
          body: formData
        }
      );
  }

  /**
   * Userform can only be submitted once.
   * If user reloads page, the form can be submitted again.
   */
  deactivateInputFields() {
    this.myForm.nativeElement[0].disabled = true;
    this.myForm.nativeElement[1].disabled = true;
    this.myForm.nativeElement[2].disabled = true;
    this.myForm.nativeElement[3].disabled = true;
  }


  showMessageAnimation() {
    if (!this.showMessage) {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    }
  }

  /**
   * Clears all input fields.
   */
  clearInputFields() {
    this.checkoutForm.reset();
  }
}
