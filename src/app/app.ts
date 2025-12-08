import { Component, signal } from '@angular/core';
import { AdvancedReactiveForm } from './advanced-reactive-form/advanced-reactive-form';

@Component({
  selector: 'app-root',
  imports: [AdvancedReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('io-article');
}
