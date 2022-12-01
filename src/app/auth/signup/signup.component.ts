import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface signup {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
  number: FormControl<number | null>;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  /*
   **
   */
  signupForm = new FormGroup<signup>({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    number: new FormControl(0, [Validators.required]),
  });

  onSubmit() {
    console.warn(this.signupForm.value);
    console.warn(this.signupForm);
    this.signupForm.setErrors(['invalid email or password']);
  }
}
