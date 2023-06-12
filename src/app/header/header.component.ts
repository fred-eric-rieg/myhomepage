import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  openBurger: boolean = false;

  @ViewChild('top') top: ElementRef | undefined;
  private contactElement: ElementRef | undefined;
  private projectsElement: ElementRef | undefined;
  private aboutElement: ElementRef | undefined;


  constructor(private scrollService: ScrollService) {

  }


  ngAfterViewInit() {
    // Handing over the target element to the scroll service for broadcasting.
    this.scrollService.setScrollElement(this.top!, 'top');
    
  }
  

  scrollAbout() {
    this.scrollService.targetAbout.subscribe((element) => {
      this.aboutElement = element;
    });
    const element = this.aboutElement?.nativeElement;
    element!.scrollIntoView({behavior: 'smooth'});
  }

  
  scrollProjects() {
    this.scrollService.targetProjects.subscribe((element) => {
      this.projectsElement = element;
    });
    this.scrollService.setScrollElement(this.projectsElement!, 'projects');
    const element = this.projectsElement?.nativeElement;
    element!.scrollIntoView({behavior: 'smooth'});
  }


  scrollContact() {
    this.scrollService.targetContact.subscribe((element) => {
      this.contactElement = element;
    });
    this.scrollService.setScrollElement(this.contactElement!, 'contact');
    const element = this.contactElement?.nativeElement;
    element!.scrollIntoView({behavior: 'smooth'});
  }


  scrollTop() {
    const element = this.top?.nativeElement;
    element!.scrollIntoView({behavior: 'smooth'});
  }


  openBurgerMenu() {
    this.openBurger == false ? this.openBurger = true : this.openBurger = false;
  }


  closeBurgerMenu() {
    this.openBurger = false;
  }
}