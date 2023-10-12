import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingComponent } from './working.component';
import { SharedModule } from 'src/app/modules';




@NgModule({
  declarations: [
    WorkingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WorkingComponent
  ]
})
export class WorkingModule { }
