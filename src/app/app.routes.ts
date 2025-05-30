import { Routes } from '@angular/router';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo/veiculo-form/veiculo-form.component';
import { ClienteListComponent } from './cliente/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form.component';
import { ReservaListComponent } from './reserva/reserva-list.component';
import { ReservaFormComponent } from './reserva/reserva-form.component';

export const routes: Routes = [
  // Rotas de Veículo (existentes)
  { path: '', component: VeiculoListComponent },
  { path: 'veiculos', redirectTo: '', pathMatch: 'full' },
  { path: 'veiculos/novo', component: VeiculoFormComponent },

  // Rotas de Cliente (novas)
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/novo', component: ClienteFormComponent },
  { path: 'clientes/editar/:cpf', component: ClienteFormComponent },

  // Rotas de Reserva (novas)
  { path: 'reservas', component: ReservaListComponent },
  { path: 'reservas/nova', component: ReservaFormComponent },
  
  // Redirecionamento padrão
  { path: '**', redirectTo: '' }
];