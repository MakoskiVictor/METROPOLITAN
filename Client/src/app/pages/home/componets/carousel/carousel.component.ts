import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Carousel } from './models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  // Imágenes traidas del carousel-container
  @Input() carouselImages: Carousel[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  };

  // Seleccionar img según los indicators
  selectImage(index: number): void {
    this.selectedIndex = index;
  };

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.carouselImages.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.carouselImages.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  };

  // Movimiento automático
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick()
    }, this.slideInterval);
  };
}
