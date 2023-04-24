import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor() {

  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}