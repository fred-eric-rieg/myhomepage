import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {

  }

  scrollAbout() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  scrollProjects() {
    window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })
  }

  scrollContact() {
    window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' })
  }
}
