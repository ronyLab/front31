export interface Veiculo {
  id?: number;
  modelo: string;
  marca: string;
  ano: number;
  placa: string;
  diaria: number;
  disponivel?: boolean;
}