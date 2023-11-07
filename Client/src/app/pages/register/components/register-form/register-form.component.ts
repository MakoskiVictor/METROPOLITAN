import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  registerForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required, 
        Validators.minLength(5),
        Validators.pattern(/^[a-zA-Z\s]+$/),
        Validators.pattern(/^[^\d]+$/)
      ]),
      lastname: new FormControl('', [
        Validators.required, 
        Validators.minLength(5),
        Validators.pattern(/^[a-zA-Z\s]+$/),
        Validators.pattern(/^[^\d]+$/)
      ]),
      email: new FormControl('', [
        Validators.required, 
        Validators.email,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ]),
      checkBox: new FormControl(false, Validators.requiredTrue),
      password: new FormControl('', [
        Validators.required, 
        Validators.minLength(5), 
        Validators.pattern(/^(?=.*[A-Z]).+$/),
        Validators.pattern(/^(?=.*[a-z]).+$/),
        Validators.pattern(/^(?=.*\d).+$/)
      ]),
      passwordCheck: new FormControl('', [
        Validators.required
      ])
    }, { validators: this.passwordMatchValidator.bind(this) });
  }

  onSubmit() {
    console.warn(this.registerForm.value);
    console.warn(this.registerForm.get('password')?.errors);
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const passwordCheck = control.get('passwordCheck')?.value;
    // Solo devuelve un error si ambos campos han sido tocados o están dirty.
    if (control.get('password')?.dirty && control.get('passwordCheck')?.dirty &&
    password !== passwordCheck) {
    // Se recomienda establecer el error en el control específico
    control.get('passwordCheck')?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
    }
    return null;
  }


}
