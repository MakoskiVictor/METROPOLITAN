import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent, CarouselContainerComponent } from './componets';





@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CarouselContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
