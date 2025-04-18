import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Register } from './models/register.model';
import { Login } from './models/login.midel';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RegisterComponent } from './components/account/register/register.component';
import { LoginComponent } from './components/account/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { Member } from './models/member.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    NavbarComponent, RegisterComponent, LoginComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showName(): void {
    let user: Member = {
      name: 'laura'
    }

    console.log(user);
  }
}