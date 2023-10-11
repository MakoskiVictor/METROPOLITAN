import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent, CarouselContainerComponent } from './componets';
import { SharedModule } from 'src/app/modules';





@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CarouselContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
