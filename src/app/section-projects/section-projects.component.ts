import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent {

  @ViewChild('projects') projects: ElementRef | undefined;

  constructor(private scrollService: ScrollService) { }

  ngAfterViewInit() {
    this.scrollService.setScrollElement(this.projects!, 'projects');
  }
}
