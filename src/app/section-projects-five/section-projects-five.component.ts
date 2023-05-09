import { Component } from '@angular/core';

@Component({
  selector: 'app-section-projects-five',
  templateUrl: './section-projects-five.component.html',
  styleUrls: ['./section-projects-five.component.scss']
})
export class SectionProjectsFiveComponent {
  showBox: boolean = false;

  constructor() {

  }

  mouseClick(event: any) {
    if (!this.showBox) {
      this.showBox = true;
    } else {
      this.showBox = false;
    }
  }
}
