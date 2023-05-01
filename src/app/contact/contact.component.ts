import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showMessage: boolean = false;

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    text: ''
  });

  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit() {
    if (!this.showMessage) {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    }
  }
}
