import { Component, ElementRef } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showScrollToTop: boolean = false;

  topElement: ElementRef | undefined;


  constructor(private scrollService: ScrollService) {

  }

  ngOnInit() {
    this.scrollService.targetTop.subscribe((element) => {
      this.topElement = element;
    });
  }
  

  /** Using a service as transmitter of the target ElementRef object from the header */
  scrollTop() {
    this.scrollService.setScrollElement(this.topElement!, 'top');
    const element = this.topElement?.nativeElement;
    element!.scrollIntoView({behavior: 'smooth'});
  }
}
