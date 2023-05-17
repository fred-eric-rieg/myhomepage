import { Component } from '@angular/core';

@Component({
  selector: 'app-section-projects-four',
  templateUrl: './section-projects-four.component.html',
  styleUrls: ['./section-projects-four.component.scss']
})
export class SectionProjectsFourComponent {
  // Strings are splittet into single letters to animate them.
  english: string[] = 'Welcome! I am Frederic Rieg'.split('');
  german: string[] = 'Willkommen! Ich bin Frederic Rieg'.split('');
  french: string[] = 'Bienvenue! Je suis Frederic Rieg'.split('');
  dutch: string[] = 'Welkom! Ik ben Frederic Rieg'.split('');
  turkish: string[] = 'Hoş geldiniz! Ben Frederic Rieg'.split('');
  japanese: string[] = 'ようこそ！ 私はフレデリック・リーグです'.split('');
  chinese: string[] = '欢迎你! 我是弗雷德里克-里格'.split('');
  name: string[] = 'Frederic Rieg:'.split('');
  profession: string[] = 'Frontend Developer'.split('');

  showBox: boolean = false;
  t: number = 0;

  constructor() {

  }

  mouseClick(event: any) {
    if (!this.showBox) {
      this.showBox = true;
    } else {
      this.showBox = false;
    }
  }

  ngOnInit(): void {}
}
