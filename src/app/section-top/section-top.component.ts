import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-top',
  templateUrl: './section-top.component.html',
  styleUrls: ['./section-top.component.scss']
})
export class SectionTopComponent {
  start: number = 0;
  now: number = 0;
  t: number = 0;



  constructor() { }

  getElement(event: any) {
    this.start = new Date().getTime();
    this.turnSmall(event);
  }

  turnSmall(event: any) {
    setInterval(() => {
      this.now = new Date().getTime();
      if (this.t <= 2 * Math.PI) {
        this.t += Math.PI / 60;
        if (window.innerWidth < 600) {
          event.target.style.left = `calc(-250px * ${Math.cos(this.t)})`;
          event.target.style.top = `calc(-50px * ${Math.sin(this.t)})`;
        } else {
          event.target.style.left = `calc(-500px * ${Math.cos(this.t)})`;
          event.target.style.top = `calc(-100px * ${Math.sin(this.t)})`;
        }
      } else {
        this.t = 0;
      }
      if (this.t < Math.PI) {
        event.target.style.zIndex = '1';
      } else {
        event.target.style.zIndex = '4';
      }
    }, 1000 / 60);
  }
}
