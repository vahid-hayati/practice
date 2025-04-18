import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Register } from '../../../models/register.model';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule, ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fB = inject(FormBuilder);

  registerFg = this.fB.group({
    nameCtrl: '',
    emailCtrl: '',
    passwordCtrl: ''
  });

  get NameCtrl(): FormControl {
    return this.registerFg.get('nameCtrl') as FormControl;
  }

  get EmailCtrl(): FormControl {
    return this.registerFg.get('emailCtrl') as FormControl;
  }

  get PasswordCtrl(): FormControl {
    return this.registerFg.get('passwordCtrl') as FormControl;
  }

  register(): void {
    let student: Register = {
      name: this.NameCtrl.value,
      email: this.EmailCtrl.value,
      password: this.PasswordCtrl.value
    }

    console.log(student);
    // console.log(student.name);
  }
}
