import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {
  start: number = 0;
  now: number = 0;
  t: number = 0;

  constructor() { }

  @ViewChild('small') small: any;
  @ViewChild('smaller') smaller: any;

  isTurning: boolean = false;

  getElement(event: any) {
    if (!this.isTurning) {
      this.isTurning = true;
      this.start = new Date().getTime();
      this.turnSmall(event);
    } else {
      this.isTurning = false;
    }

  }

  turnSmall(event: any) {
    setInterval(() => {
      this.now = new Date().getTime();
      if (this.now - this.start < 10000) {
        if (this.t <= 2 * Math.PI) {
          this.t += Math.PI / 30;
          event.target.style.left = `calc(50% - 300px * ${Math.cos(this.t)})`;
          event.target.style.top = `calc(100vh - 30rem - 200px * ${Math.sin(this.t)})`;
        } else {
          this.t = 0;
        }
        if (event.target.offsetLeft > 294 && this.t < Math.PI) {
          event.target.style.zIndex = '1';
        } else {
          event.target.style.zIndex = '4';
        }
      } else {
        window.clearInterval(0);
        this.now = 0;
        this.start = 0;
      }
    }, 1000 / 30);
  }
}
