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
    console.log('scrolling to top')
    window.scrollTo({ top: 100, behavior: 'smooth' })
  }
}
