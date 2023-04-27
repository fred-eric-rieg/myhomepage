import { Component, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-top',
  templateUrl: './section-top.component.html',
  styleUrls: ['./section-top.component.scss']
})
export class SectionTopComponent implements OnInit {
  @ViewChild('blueCircle') blueCircle: any;

  public getScreenWidth: any;


  constructor() { }
  ngOnInit(): void {
  }

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


/**
 * Don't use 100vh for mobile responsive!
 * https://dev.to/nirazanbasnet/dont-use-100vh-for-mobile-responsive-3o97
 * 
 * HostListener window resize
 * https://dev.to/dhanush9952/angular-13-detect-width-and-height-of-screen-tutorial-1of9
 */
