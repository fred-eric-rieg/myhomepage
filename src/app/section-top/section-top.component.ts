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
  turning: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.turnSmall(document.getElementById('small'));
  }

  /**
   * Sets in motion a circulation animation based on parameter coordinate calculations of a point P circulation
   * around a geometrical center of gravity with a radius of r1 and r2. This forms an elliptic path that
   * looks like the moon circulation around the earth. In addition, the z-index of the moon is set lower than
   * the earths as soon as t (0 <= t <= 2 pi) is greater Pi, thus creating the illusion of the moon moving
   * behind the earth each half circulation phase.
   * @param moon as DOM element.
   */
  turnSmall(moon: any) {
    setInterval(() => {
      this.now = new Date().getTime();
      if (this.t <= 2 * Math.PI) {
        this.t += Math.PI / 60;
        if (window.innerWidth < 600) { // Creating a seperate radius for mobile devices
          moon.style.left = `calc(-250px * ${Math.cos(this.t)})`;
          moon.style.top = `calc(-50px * ${Math.sin(this.t)})`;
        } else {
          moon.style.left = `calc(-500px * ${Math.cos(this.t)})`;
          moon.style.top = `calc(-100px * ${Math.sin(this.t)})`;
        }
      } else {
        this.t = 0; // Reseting the circulation phase
      }
      if (this.t < Math.PI) {
        moon.style.zIndex = '1';
      } else {
        moon.style.zIndex = '4';
      }
    }, 1000 / 60); // Ensuring 60 frames per second
  }
}
