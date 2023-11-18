import { Component } from '@angular/core';

@Component({
  selector: 'app-section-projects-crm',
  templateUrl: './section-projects-crm.component.html',
  styleUrls: ['./section-projects-crm.component.scss']
})
export class SectionProjectsCrmComponent {
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
