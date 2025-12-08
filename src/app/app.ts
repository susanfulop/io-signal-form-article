import { Component, signal } from '@angular/core';
import { HibridForm } from './hibrid-form/hibrid-form';

@Component({
  selector: 'app-root',
  imports: [HibridForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('io-article');
}
