import { Component, signal, computed } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-simple-signal-form',
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule],
  templateUrl: './simple-signal-form.html',
  styleUrl: './simple-signal-form.scss',
})
export class SimpleSignalForm {
  firstName = signal('');
  lastName = signal('');
  firstNameTouched = signal(false);
  lastNameTouched = signal(false);

  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  firstNameError = computed(() => {
    const value = this.firstName();
    if (!value) return 'First Name is required';
    if (value.length < 3) return 'Minimum 3 characters';
    if (value.length > 30) return 'Maximum 30 characters';
    return '';
  });

  lastNameError = computed(() => {
    const value = this.lastName();
    if (!value) return 'Last Name is required';
    if (value.length < 3) return 'Minimum 3 characters';
    if (value.length > 30) return 'Maximum 30 characters';
    return '';
  });

  firstNameErrorMatcher: ErrorStateMatcher = {
    isErrorState: () => this.firstNameTouched() && !!this.firstNameError()
  };

  lastNameErrorMatcher: ErrorStateMatcher = {
    isErrorState: () => this.lastNameTouched() && !!this.lastNameError()
  };
}






