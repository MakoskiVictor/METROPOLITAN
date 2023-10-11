import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-to-top-arrow',
  templateUrl: './to-top-arrow.component.html',
  styleUrls: ['./to-top-arrow.component.scss']
})
export class ToTopArrowComponent {

  pageScrolled = false;


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollOffset = window.pageYOffset;
    // Aquí puedes manejar el evento de scroll
    console.log('Scrolling...', scrollOffset, this.pageScrolled);
    if (scrollOffset >= 400) {
      this.pageScrolled = true;
    } else {
      this.pageScrolled = false;
    }
    // Puedes realizar cualquier lógica que desees cuando ocurre el evento de scroll.
  }

}
