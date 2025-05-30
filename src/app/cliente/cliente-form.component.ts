import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './cliente-form.component.html'
})
export class ClienteFormComponent {
  private fb = inject(FormBuilder);
  private service = inject(ClienteService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      nome: [''],
      cpf: [''],
      telefone: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  salvar() {
    if (this.form.invalid) return;
    
    this.service.adicionar(this.form.value).subscribe({
      next: () => {
        this.snackBar.open('Cliente cadastrado!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/clientes']);
      },
      error: () => {
        this.snackBar.open('Erro no cadastro!', 'Fechar', { duration: 3000 });
      }
    });
  }
}