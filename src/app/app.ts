import { Component, signal } from '@angular/core';
import { SimpleSignalForm } from './simple-signal-form/simple-signal-form';

@Component({
  selector: 'app-root',
  imports: [SimpleSignalForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('io-article');
}
