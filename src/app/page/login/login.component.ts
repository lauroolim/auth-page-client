import { provideToastr, ToastrService } from 'ngx-toastr';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { LoginPageDefaultComponent } from '../../components/login-page-default/login-page-default.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputPrimaryComponent } from '../../components/input-primary/input-primary.component';
import { Router } from '@angular/router';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginPageDefaultComponent,
    ReactiveFormsModule,
    InputPrimaryComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastr.success("Login concluído!"),
      error: () => this.toastr.error("ocorreu um erro! Tente novamente em alguns instantes.")
    })
  }
  navigate() {
    this.router.navigate(["/signup"])
  }
}
