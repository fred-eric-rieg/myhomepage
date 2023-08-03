import { AfterViewInit, Component, ElementRef, Host, HostListener, ViewChild } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent implements AfterViewInit {

  @ViewChild('icon1') icon1: ElementRef | undefined;
  @ViewChild('icon2') icon2: ElementRef | undefined;
  @ViewChild('icon3') icon3: ElementRef | undefined;
  @ViewChild('icon4') icon4: ElementRef | undefined;
  @ViewChild('icon5') icon5: ElementRef | undefined;
  @ViewChild('icon6') icon6: ElementRef | undefined;
  @ViewChild('icon7') icon7: ElementRef | undefined;
  @ViewChild('icon8') icon8: ElementRef | undefined;
  @ViewChild('icon9') icon9: ElementRef | undefined;
  @ViewChild('icon10') icon10: ElementRef | undefined;
  @ViewChild('icon11') icon11: ElementRef | undefined;

  @ViewChild('about') about: ElementRef | undefined;
  private contactElement: ElementRef | undefined;

  @HostListener('document:scroll', ['$event'])
  onDocumentScroll($event: any) {
    const windowHeight = window.innerHeight;
    const boundingRectIcon1 = this.icon1?.nativeElement.getBoundingClientRect();

    if (boundingRectIcon1!.top < windowHeight) {
      this.icon1!.nativeElement.classList.add('animate');
      this.icon2!.nativeElement.classList.add('animate');
      this.icon3!.nativeElement.classList.add('animate');
      this.icon4!.nativeElement.classList.add('animate');
      this.icon5!.nativeElement.classList.add('animate');
      this.icon6!.nativeElement.classList.add('animate');
      this.icon7!.nativeElement.classList.add('animate');
      this.icon8!.nativeElement.classList.add('animate');
      this.icon9!.nativeElement.classList.add('animate');
      this.icon10!.nativeElement.classList.add('animate');
      this.icon11!.nativeElement.classList.add('animate');
    }
  }

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
    element!.scrollIntoView({ behavior: 'smooth' });
  }
}
