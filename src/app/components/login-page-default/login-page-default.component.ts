import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page-default',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page-default.component.html',
  styleUrl: './login-page-default.component.scss'
})
export class LoginPageDefaultComponent {
  @Input() title: string = ""; //o title do html que será recebido como input
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
}
