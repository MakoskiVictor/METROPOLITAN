import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent, CarouselContainerComponent, FitnessSectionComponent } from './componets';
import { SharedModule } from 'src/app/modules';






@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CarouselContainerComponent,
    FitnessSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
