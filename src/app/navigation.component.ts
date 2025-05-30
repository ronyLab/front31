import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; // Novo import
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule, // Novo módulo
    RouterModule
  ],
  template: `
    <div class="sidebar-container">
      <mat-toolbar color="primary" class="sidebar-header">
        <span>Locadora</span>
      </mat-toolbar>

      <nav class="sidebar-nav">
        <a mat-list-item routerLink="/veiculos" routerLinkActive="active">
          <mat-icon>directions_car</mat-icon>
          <span>Veículos</span>
        </a>
        
        <a mat-list-item routerLink="/clientes" routerLinkActive="active">
          <mat-icon>people</mat-icon>
          <span>Clientes</span>
        </a>
        
        <a mat-list-item routerLink="/reservas" routerLinkActive="active">
          <mat-icon>calendar_today</mat-icon>
          <span>Reservas</span>
        </a>
      </nav>
    </div>
  `,
  styles: [`
    .sidebar-container {
      display: flex;
      flex-direction: column;
      width: 250px;
      height: 100vh;
      background-color:rgb(77, 76, 80);
      box-shadow: 2px 0 5px rgba(89, 73, 73, 0.1);
    }

    .sidebar-header {
      display: flex;
      justify-content: center;
      height: 64px;
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      padding: 16px 0;
    }

    a[mat-list-item] {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 12px 24px;
      color: rgba(255, 255, 255, 0.87);
      text-decoration: none;
      transition: background-color 0.3s;
    }

    a[mat-list-item]:hover {
      background-color: #e0e0e0;
    }

    .active {
      background-color: #e3f2fd !important;
      color: #1976d2 !important;
    }

    mat-icon {
      margin-right: 8px;
    }
  `]
})
export class NavigationComponent {}