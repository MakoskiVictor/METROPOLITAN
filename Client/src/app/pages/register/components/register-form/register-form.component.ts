import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  registerForm: FormGroup = new FormGroup({})

  ngOnInit(): void {
      this.initRegisterForm()
  }

  initRegisterForm () {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required, 
        Validators.minLength(5)
      ]),
      lastname: new FormControl('', 
        [Validators.required, 
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required, 
        Validators.minLength(5), 
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required, 
        Validators.minLength(5), 
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$")
      ]),
      passwordCheck: new FormControl('', [
        Validators.required, 
        Validators.minLength(5), 
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$")
      ])
    })
  }

  onSubmit () {
    console.warn(this.registerForm.value);
  }

  passwordMatchValidator (control: FormControl): ValidationErrors | null {
    const otherControl = this.registerForm.get("password")

    if (!otherControl) {
      return { equalTo: "El campo debe completarse" }
    }

    const value = control.value;
    const otherValue = otherControl.value;

    if (value !== otherValue) {
      return { equalTo: "Las contraseñas no coinciden" };
    }

    return null;
  }

}
