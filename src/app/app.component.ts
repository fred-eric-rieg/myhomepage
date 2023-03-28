import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['books.jpg', 'darmstadt.jpg', 'it.jpg'];
  headlines = ['Books are amazing!', 'Darmstadt Kids', 'IT is fun!'];
  currentImage = 0;
  showImage = true;
  blackBg = true;

  /**
   * OnInit kommt aus der Angular library und wird beim Laden der Seite ausgeführt.
   */
  ngOnInit() {
    this.updateImage();
  }


  updateImage() {
    setInterval( () => {
      this.currentImage ++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.currentImage === 2 ? this.blackBg = false : this.blackBg = true; // Nur img 2 soll einen weißen Hintergrund erhalten.
        this.showImage = true;
      },10);
    }, 8000)
  }
}
