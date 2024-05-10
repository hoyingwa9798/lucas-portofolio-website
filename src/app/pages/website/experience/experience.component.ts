import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent{
  name = 'Angular';
  @ViewChild('timeline', { static: true }) timeline!: ElementRef;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // Get the native element of the ViewChild
    const ulElement = this.timeline.nativeElement;

    // Get all child li elements
    const liElements = ulElement.querySelectorAll('li');

    // Check if each li element is in the viewport
    liElements.forEach((li: HTMLElement) => {
      const rect = li.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      // Add or remove the "scrolled" class based on visibility
      if (isVisible) {
        li.classList.add('show');
      } else {
        //li.classList.remove('show');
      }
    });
  }

}
