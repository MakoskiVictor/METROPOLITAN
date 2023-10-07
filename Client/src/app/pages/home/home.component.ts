import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showImage = false;
  showExperienceSectionAnimation = false;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {

    // Obtener la posición del componente en la página
    const componentPosition = this.el.nativeElement.offsetTop;

    // Obtener la posición actual de desplazamiento en la ventana
    const scrollPosition = window.pageYOffset;

    // Verificar si el componente está a la vista (en la mitad de la ventana)
    if (scrollPosition >= componentPosition - window.innerHeight) {
      this.showExperienceSectionAnimation = true;
    } else {
      this.showExperienceSectionAnimation = false;
    }
  }

  showAnimation() {
    this.showImage = true;
  }

}
