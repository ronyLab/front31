import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Locadora de Veículos</span>
      
      <span class="spacer"></span>
      
      <nav>
        <a mat-button routerLink="/veiculos" routerLinkActive="active">
          <mat-icon>directions_car</mat-icon>
          Veículos
        </a>
        
        <a mat-button routerLink="/clientes" routerLinkActive="active">
          <mat-icon>people</mat-icon>
          Clientes
        </a>
        
        <a mat-button routerLink="/reservas" routerLinkActive="active">
          <mat-icon>calendar_today</mat-icon>
          Reservas
        </a>
      </nav>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    nav {
      display: flex;
      gap: 10px;
      margin-left: 20px;
    }
    .active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  `]
})
export class NavigationComponent {}