import { Component } from '@angular/core';

@Component({
  selector: 'app-section-projects-four',
  templateUrl: './section-projects-four.component.html',
  styleUrls: ['./section-projects-four.component.scss']
})
export class SectionProjectsFourComponent {
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
