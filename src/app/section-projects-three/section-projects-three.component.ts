import { Component } from '@angular/core';

@Component({
  selector: 'app-section-projects-three',
  templateUrl: './section-projects-three.component.html',
  styleUrls: ['./section-projects-three.component.scss']
})
export class SectionProjectsThreeComponent {
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
