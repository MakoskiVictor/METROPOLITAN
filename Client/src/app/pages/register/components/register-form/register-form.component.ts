import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  registerForm = new FormGroup({
    firstname: new FormControl('', [Validators.required/* , Validators.minLength(5) */]),
    lastname: new FormControl('', [Validators.required/* , Validators.minLength(5) */]),
    email: new FormControl('', [Validators.required/* , Validators.minLength(5), Validators.email */]),
    password: new FormControl('', [Validators.required, /* Validators.minLength(5) *//* , Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$") */])
  })

  passwordCheck = new FormControl('', [Validators.required]);

  onSubmit () {
    console.warn(this.registerForm.value);
  }

}
