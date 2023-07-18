import { Component } from '@angular/core';

@Component({
  selector: 'app-section-projects-six',
  templateUrl: './section-projects-six.component.html',
  styleUrls: ['./section-projects-six.component.scss']
})
export class SectionProjectsSixComponent {
  
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
