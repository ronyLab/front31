import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo.model';

@Injectable({ providedIn: 'root' })
export class VeiculoService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:5052/api/veiculo';

  listar(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.API);
  }
listarDisponiveis(): Observable<Veiculo[]> {
  return this.http.get<Veiculo[]>(`${this.API}/disponiveis`);
}
  adicionar(veiculo: Omit<Veiculo, 'id'>): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.API, {
      ...veiculo,
      disponivel: true
    });
  }

  alugar(placa: string): Observable<void> {
    return this.http.post<void>(`${this.API}/alugar/${placa}`, {});
  }

  devolver(placa: string): Observable<void> {
    return this.http.post<void>(`${this.API}/devolver/${placa}`, {});
  }
}