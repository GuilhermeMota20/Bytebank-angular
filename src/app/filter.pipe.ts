import { Pipe, PipeTransform } from '@angular/core';
import { Transferencia } from './models/tramferencia.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(trasnferencias: Transferencia[], filterData: string) {

    if(trasnferencias.length === 0 || filterData === '') {
      return trasnferencias;
    }
    else {
      return trasnferencias.filter((trasnferencia)=> {
        return trasnferencia.nome.toLowerCase() === filterData.toLowerCase();
      })
    }
  }
}
