import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from '../services/reserva.service';
import { VeiculoService } from '../services/veiculo.service';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-reserva-form',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: `./reserva-form.component.html`
})
export class ReservaFormComponent implements OnInit {
  form!: FormGroup;
  veiculosDisponiveis: any[] = [];
  clientes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private reservaService: ReservaService,
    private veiculoService: VeiculoService,
    private clienteService: ClienteService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      placaVeiculo: ['', Validators.required],
      cpfCliente: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required]
    });
    this.carregarDados();
  }

  carregarDados(): void {
    this.veiculoService.listarDisponiveis().subscribe({
      next: (veiculos) => this.veiculosDisponiveis = veiculos,
      error: () => this.mostrarErro('Erro ao carregar veículos')
    });

    this.clienteService.listar().subscribe({
      next: (clientes) => this.clientes = clientes,
      error: () => this.mostrarErro('Erro ao carregar clientes')
    });
  }

 salvar(): void {
  if (this.form.valid) {
    const reservaData = {
      id: 0, // necessário para a API
      placaVeiculo: this.form.value.placaVeiculo,
      cpfCliente: this.form.value.cpfCliente,
      dataInicio: new Date(this.form.value.dataInicio).toISOString(),
      dataFim: new Date(this.form.value.dataFim).toISOString()
    };

    console.log('Enviando reserva:', reservaData);

    this.reservaService.criar(reservaData).subscribe({
      next: () => {
        this.snackBar.open('Reserva criada com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/reservas']);
      },
      error: (err) => {
        console.error('Erro ao criar reserva:', err);
        this.snackBar.open('Erro ao criar reserva. Verifique os dados.', 'Fechar', { duration: 5000 });
      }
    });
  }
}





  private mostrarErro(mensagem: string): void {
    this.snackBar.open(mensagem, 'Fechar', { duration: 3000 });
  }
}
