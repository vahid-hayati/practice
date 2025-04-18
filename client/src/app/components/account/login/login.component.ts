import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from '../../../models/login.midel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fB = inject(FormBuilder);

  loginFg = this.fB.group({
    emailCtrl: '',
    passwordCtrl: ''
  });

  get EmailCtrl(): FormControl {
    return this.loginFg.get('emailCtrl') as FormControl;
  }

  get PasswordCtrl(): FormControl {
    return this.loginFg.get('passwordCtrl') as FormControl;
  }

  login(): void {
    let userIn: Login = {
      email: this.EmailCtrl.value,
      password: this.PasswordCtrl.value
    }

    console.log(userIn);
  }
}
