import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-top',
  templateUrl: './section-top.component.html',
  styleUrls: ['./section-top.component.scss']
})
export class SectionTopComponent {
  @ViewChild('blueCircle') blueCircle: any;

  constructor() { }

  /**
   * Sets the center of the radial gradient to the mouse position.
   * @param event as mousehover event.
   */
  rotate(event: any) {
    let x = event.clientX;
    let y = event.clientY;
    this.blueCircle.nativeElement.style.background = `radial-gradient(74.22% 74.22% at ${x}px ${y}px,  #456990 6.25%, #456990 51.56%, #114B5F 100%)`;
  }
}
