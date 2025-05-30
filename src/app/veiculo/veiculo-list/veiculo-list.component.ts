import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../models/veiculo.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-veiculo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './veiculo-list.component.html'
})
export class VeiculoListComponent implements OnInit {
  veiculos: Veiculo[] = [];
  displayedColumns = ['modelo', 'marca', 'placa', 'diaria', 'status', 'acoes'];

  constructor(
    private service: VeiculoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carregarVeiculos();
  }

  carregarVeiculos(): void {
    this.service.listar().subscribe({
      next: (data) => this.veiculos = data,
      error: () => this.snackBar.open('Erro ao carregar!', 'Fechar', { duration: 3000 })
    });
  }

  alugar(veiculo: Veiculo): void {
    this.service.alugar(veiculo.placa).subscribe({
      next: () => {
        this.snackBar.open('Veículo alugado!', 'Fechar', { duration: 3000 });
        this.carregarVeiculos();
      },
      error: () => this.snackBar.open('Erro ao alugar!', 'Fechar', { duration: 3000 })
    });
  }

  devolver(veiculo: Veiculo): void {
    this.service.devolver(veiculo.placa).subscribe({
      next: () => {
        this.snackBar.open('Veículo devolvido!', 'Fechar', { duration: 3000 });
        this.carregarVeiculos();
      },
      error: () => this.snackBar.open('Erro ao devolver!', 'Fechar', { duration: 3000 })
    });
  }
}