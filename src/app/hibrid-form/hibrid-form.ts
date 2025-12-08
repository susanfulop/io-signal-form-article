import { Component, signal, computed } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hibrid-form',
  imports: [FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule],
  templateUrl: './hibrid-form.html',
  styleUrl: './hibrid-form.scss',
})
export class HibridForm {
  firstNameSignal = signal('');
  lastNameSignal = signal('');

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
  });

  fullName = computed(() => `${this.firstNameSignal()} ${this.lastNameSignal()}`);

  constructor() {
    this.form.get('firstName')!.valueChanges.subscribe(val => this.firstNameSignal.set(val ?? ''));
    this.form.get('lastName')!.valueChanges.subscribe(val => this.lastNameSignal.set(val ?? ''));
  }

}
