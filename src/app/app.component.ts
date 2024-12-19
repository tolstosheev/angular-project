import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationDrawerComponent} from './navigation-drawer/navigation-drawer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationDrawerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project';
}
