import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: `/cliente-list.component.html`,
})
export class ClienteListComponent {
  displayedColumns: string[] = ['nome', 'cpf', 'acoes'];
  clientes: any[] = [];
  
  constructor(private service: ClienteService) {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.service.listar().subscribe({
      next: (clientes) => {
        this.clientes = clientes;
      },
      error: (err) => {
        console.error('Erro ao carregar clientes:', err);
      }
    });
  }
}