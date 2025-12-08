import { Component, signal } from '@angular/core';
import { SimpleReactiveForm } from './simple-reactive-form/simple-reactive-form';

@Component({
  selector: 'app-root',
  imports: [SimpleReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('io-article');
}
