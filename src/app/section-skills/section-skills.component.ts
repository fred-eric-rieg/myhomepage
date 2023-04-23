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
    window.scrollTo({ top: 10000, behavior: 'smooth' })
  }
}
