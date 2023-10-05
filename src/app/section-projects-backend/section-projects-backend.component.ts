import { Component } from '@angular/core';

@Component({
  selector: 'app-section-projects-backend',
  templateUrl: './section-projects-backend.component.html',
  styleUrls: ['./section-projects-backend.component.scss']
})
export class SectionProjectsBackendComponent {
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
