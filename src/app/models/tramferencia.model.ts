export interface Transferencia {
  id?: number | string;
  nome: string;
  valor: number;
  destino: number | string;
  data?: string;
}
