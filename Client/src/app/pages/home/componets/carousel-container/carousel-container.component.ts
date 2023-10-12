import { Component } from '@angular/core';
import { carouselFiles } from './utils';

@Component({
  selector: 'app-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.scss']
})
export class CarouselContainerComponent {

  carouselImages = carouselFiles;

}
