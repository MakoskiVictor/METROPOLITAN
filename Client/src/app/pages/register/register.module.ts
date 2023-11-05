import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SharedModule } from 'src/app/modules';




@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RegisterModule { }
