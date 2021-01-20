import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../models/habitacion.interface';
import { HabitacionService } from '../../services/habitacion.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  habitaciones: Habitacion[] = [];

  constructor(_habitacionService: HabitacionService) {
    _habitacionService.getHabitaciones().then(data => {
      this.habitaciones = data;
    })
  }

  get cargando(): boolean {
    return this.habitaciones.length == 0;
  }

  ngOnInit(): void {}
}
