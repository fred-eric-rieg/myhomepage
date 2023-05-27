import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollAbout = new BehaviorSubject<ElementRef>(new ElementRef(document.createElement('div')));
  targetAbout = this.scrollAbout.asObservable();
  private scrollTop = new BehaviorSubject<ElementRef>(new ElementRef(document.createElement('div')));
  targetTop = this.scrollTop.asObservable();
  private scrollProjects = new BehaviorSubject<ElementRef>(new ElementRef(document.createElement('div')));
  targetProjects = this.scrollProjects.asObservable();
  private scrollContact = new BehaviorSubject<ElementRef>(new ElementRef(document.createElement('div')));
  targetContact = this.scrollContact.asObservable();


  constructor() { }

  getScrollSource(id: string) {
    if (id == 'top') {
      return this.targetTop;
    } else if (id == 'about') {
      return this.targetAbout;
    } else if (id == 'projects') {
      return this.targetProjects;
    } else if (id == 'contact') {
      return this.targetContact;
    } else { return '' }
  }

  setScrollElement(element: ElementRef, id: string) {
    id == 'about' ? this.scrollAbout.next(element) : '';
    id == 'top' ? this.scrollTop.next(element) : '';
    id == 'projects' ? this.scrollProjects.next(element) : '';
    id == 'contact' ? this.scrollContact.next(element) : '';
  }
}
