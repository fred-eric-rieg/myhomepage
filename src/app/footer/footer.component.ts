import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showScrollToTop: boolean = false;

  constructor() {

  }

  
  scrollTop() {
    const element = document.getElementById("top");
    element!.scrollIntoView({behavior: 'smooth'});
  }
}
