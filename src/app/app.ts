import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive} from '@angular/router';
import { Case1 } from './case1/case1';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Case1,Parent,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UdemyStudy');
}
