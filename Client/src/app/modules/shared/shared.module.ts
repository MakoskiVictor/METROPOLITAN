import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedButtonComponent, FooterComponent, ToTopArrowComponent } from './components';






@NgModule({
  declarations: [
    AnimatedButtonComponent,
    FooterComponent,
    ToTopArrowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnimatedButtonComponent,
    FooterComponent,
    ToTopArrowComponent
  ]
})
export class SharedModule { }
