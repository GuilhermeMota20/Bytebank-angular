import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/tramferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  nome: string;
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) { };

  transferir() {
    const valorEmitir: Transferencia = {
      nome: this.nome,
      valor: this.valor,
      destino: this.destino
    };

    this.service.adicionar(valorEmitir).subscribe(
      result => {
        console.log(result);
        this.limpar();
        this.router.navigateByUrl('extrato');
      },
      error => console.error(error)
    );
  };

  limpar() {
    this.nome = '';
    this.valor = 0;
    this.destino = 0;
  };
}
