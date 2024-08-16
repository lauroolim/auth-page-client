import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
