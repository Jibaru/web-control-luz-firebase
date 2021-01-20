import { Component, Input, OnInit } from '@angular/core';
import { Habitacion } from '../../models/habitacion.interface';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css'],
})
export class HabitacionComponent implements OnInit {
  @Input() habitacion: Habitacion;

  constructor() {}

  get focosEncendidos(): number {
    return this.habitacion.focos.filter(foco => foco.encendido).length;
  }

  get focosApagados(): number {
    return this.habitacion.focos.filter(foco => !foco.encendido).length;
  }

  ngOnInit(): void {}
}
