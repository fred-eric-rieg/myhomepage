import { Component } from '@angular/core';

@Component({
  selector: 'app-section-projects-two',
  templateUrl: './section-projects-two.component.html',
  styleUrls: ['./section-projects-two.component.scss']
})
export class SectionProjectsTwoComponent {

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
