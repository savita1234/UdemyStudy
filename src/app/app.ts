import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Case1 } from './case1/case1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Case1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UdemyStudy');
}
