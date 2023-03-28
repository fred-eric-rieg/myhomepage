import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['books.jpg', 'darmstadt.jpg', 'it.jpg'];
  currentImage = 0;
  showImage = true;

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
        this.showImage = true;
      },10);
    }, 8000)
  }
}
