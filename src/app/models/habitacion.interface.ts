import { Foco } from './foco.interface';
export interface Habitacion {
  $key?: string;
  nombre: string;
  descripcion: string;
  focos: Foco[];
}
