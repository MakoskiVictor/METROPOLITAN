import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedButtonComponent } from './components';




@NgModule({
  declarations: [
    AnimatedButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnimatedButtonComponent
  ]
})
export class SharedModule { }
