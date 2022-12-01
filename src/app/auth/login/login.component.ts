import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { LoginDto } from '../LoginDto';

interface IloginForm {
  Email: FormControl<string>;
  Password: FormControl<string>;
  RememberMe: FormControl<boolean>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  /**
   *
   */
  constructor(private auth: AuthServiceService) {}

  login(): void {
    let user: LoginDto = {
      Email: this.loginForm.value.Email,
      Password: this.loginForm.value.Password,
      RememberMe: this.loginForm.value.RememberMe,
    };
    console.log(this.loginForm.value);

    this.auth.login(user).subscribe({
      next: (v) => {
        console.log('data', v);
        this.auth.User = v;
      },
      error: (e) => {
        this.loginForm.setErrors({ 0: e.error.detail });
      },
      complete: () => console.info('complete'),
    });
  }

  loginForm = new FormGroup<IloginForm>({
    Email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    Password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    RememberMe: new FormControl(false, { nonNullable: true }),
  });

  // loginForm = this.fb.group({
  //   name: ['', Validators.required],
  //   password: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: [''],
  //   }),
  // });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.loginForm.value);s
  }
}
