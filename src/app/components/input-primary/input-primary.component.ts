import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-input-primary',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input-primary.component.html',
  styleUrl: './input-primary.component.scss'
})
export class InputPrimaryComponent {
  @Input() type: InputTypes = "text";
  @Input() formName: string = "";
  @Input() placeholder: string = "";
  @Input() label: string = "";
}
