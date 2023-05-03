import { Component } from '@angular/core';

@Component({
  selector: 'app-section-top',
  templateUrl: './section-top.component.html',
  styleUrls: ['./section-top.component.scss']
})
export class SectionTopComponent {
  // Strings are splittet into single letters to animate them individually.
  english: string[] = 'Welcome! I am Frederic Rieg'.split('');
  german: string[] = 'Willkommen! Ich bin Frederic Rieg'.split('');
  french: string[] = 'Bienvenue! Je suis Frederic Rieg'.split('');
  dutch: string[] = 'Welkom! Ik ben Frederic Rieg'.split('');
  turkish: string[] = 'Hoş geldiniz! Ben Frederic Rieg'.split('');
  japanese: string[] = 'ようこそ！ 私はフレデリック・リーグです'.split('');
  chinese: string[] = '欢迎你! 我是弗雷德里克-里格'.split('');

  constructor() {
  }
}
