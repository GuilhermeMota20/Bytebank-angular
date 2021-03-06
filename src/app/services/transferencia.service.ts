import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/tramferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { };

  // GET - extrato
  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  // POST - nova-transferenia
  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  };
  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  };
}
