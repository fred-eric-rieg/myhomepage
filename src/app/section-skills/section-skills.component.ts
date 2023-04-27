import { Component } from '@angular/core';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent {
  constructor() {

  }

  scrollBottom() {
    if (window.innerWidth < 600 && window.innerHeight < 700) {
      window.scrollTo({ top: window.innerHeight * 4.6, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' })
    }
  }
}
