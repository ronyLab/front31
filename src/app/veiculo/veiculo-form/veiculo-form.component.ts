import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VeiculoService } from '../../services/veiculo.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-veiculo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './veiculo-form.component.html',
  styleUrl: './veiculo-form.component.css'
})
export class VeiculoFormComponent {
  private fb = inject(FormBuilder);
  private service = inject(VeiculoService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  currentYear = new Date().getFullYear();
  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      modelo: ['', [Validators.required, Validators.minLength(2)]],
      marca: ['', Validators.required],
      ano: [this.currentYear, [
        Validators.required,
        Validators.min(1900),
        Validators.max(this.currentYear)
      ]],
      placa: ['', Validators.required],
      diaria: [0, [
        Validators.required,
        Validators.min(0)
      ]]
    });
  }

  salvar() {
    if (this.form.invalid) return;
    
    this.service.adicionar(this.form.value).subscribe({
      next: () => {
        this.snackBar.open('Veículo cadastrado!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/']);
      },
      error: () => {
        this.snackBar.open('Erro no cadastro!', 'Fechar', { duration: 3000 });
      }
    });
  }
}