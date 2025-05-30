import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private readonly API = 'http://localhost:5052/api/Reserva';

  constructor(private http: HttpClient) { }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  criar(reserva: any): Observable<any> {
    return this.http.post(this.API, reserva, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  cancelar(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}