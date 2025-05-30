import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/reserva.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reserva-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: `./reserva-list.component.html`
})
export class ReservaListComponent implements OnInit {
  reservas: any[] = [];
  displayedColumns = ['placaVeiculo', 'cpfCliente', 'dataInicio', 'dataFim', 'acoes'];

  constructor(private service: ReservaService) {}

  ngOnInit(): void {
    this.carregarReservas();
  }

  carregarReservas(): void {
  this.service.listar().subscribe({
    next: (reservas) => {
      this.reservas = reservas;
    },
    error: (err) => {
      console.error('Erro ao carregar reservas:', err);
    }
  });
}


  cancelar(id: number): void {
    console.log('Cancelando reserva com ID:', id);
  }
}
