import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-advanced-reactive-form',
  templateUrl: './advanced-reactive-form.html',
  styleUrls: ['./advanced-reactive-form.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
})
export class AdvancedReactiveForm {

  offices = ['Amsterdam', 'Utrecht', 'Eindhoven', 'Hertogenbosch', 'Rotterdams']
  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(99)
    ]),
    campus: new FormControl('', Validators.required)
  });

}
