import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { form, Field, required, minLength, maxLength } from '@angular/forms/signals';

@Component({
  selector: 'app-experimental-advanced-signal-form',
  imports: [Field, MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule],
  templateUrl: './experimental-advanced-signal-form.html',
  styleUrl: './experimental-advanced-signal-form.scss',
})
export class ExperimentalAdvancedSignalForm {

  name = signal<{ firstName: string, lastName: string }>({
    firstName: '',
    lastName: '',
  });

  nameForm = form(this.name, (schemaPath) => {
    required(schemaPath.firstName, { message: 'First name is required' });
    minLength(schemaPath.firstName, 3, { message: 'Minimum 3 characters' });
    maxLength(schemaPath.firstName, 30, { message: 'Maximum 30 characters' });

    required(schemaPath.lastName, { message: 'Last name is required' });
    minLength(schemaPath.lastName, 3, { message: 'Minimum 3 characters' });
    maxLength(schemaPath.lastName, 30, { message: 'Maximum 30 characters' });
  });


}
