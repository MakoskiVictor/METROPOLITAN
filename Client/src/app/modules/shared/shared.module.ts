import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedButtonComponent, FooterComponent } from './components';





@NgModule({
  declarations: [
    AnimatedButtonComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnimatedButtonComponent
  ]
})
export class SharedModule { }
