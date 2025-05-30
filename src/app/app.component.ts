import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component'; // Ajuste o caminho
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // ← Este deve bater com a tag no index.html
  standalone: true,
  imports: [MatIconModule, RouterModule, NavigationComponent, RouterOutlet],
  template: `<app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
