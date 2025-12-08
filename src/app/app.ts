import { Component, signal } from '@angular/core';
import { ExperimentalAdvancedSignalForm } from './experimental-advanced-signal-form/experimental-advanced-signal-form';

@Component({
  selector: 'app-root',
  imports: [ExperimentalAdvancedSignalForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('io-article');
}
