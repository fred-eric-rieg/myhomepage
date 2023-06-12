import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent implements AfterViewInit {

  @ViewChild('about') about: ElementRef | undefined;
  private contactElement: ElementRef | undefined;

  constructor(private scrollService: ScrollService) {

  }

  ngAfterViewInit(): void {
    this.scrollService.setScrollElement(this.about!, 'about');

    this.scrollService.targetContact.subscribe((element) => {
      this.contactElement = element;
    });
  }

  scrollBottom() {
    const element = this.contactElement?.nativeElement;
    element!.scrollIntoView({behavior: 'smooth'});
  }
}
