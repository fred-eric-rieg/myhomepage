import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  openBurger: boolean = false;

  constructor() {

  }

  scrollAbout() {
    const element = document.getElementById("about");
    element!.scrollIntoView({behavior: 'smooth'});
  }

  scrollProjects() {
    const element = document.getElementById("projects");
    element!.scrollIntoView({behavior: 'smooth'});
  }

  scrollContact() {
    const element = document.getElementById("contact");
    element!.scrollIntoView({behavior: 'smooth'});
  }

  openBurgerMenu() {
    this.openBurger == false ? this.openBurger = true : this.openBurger = false;
  }

  closeBurgerMenu() {
    this.openBurger = false;
  }
}




