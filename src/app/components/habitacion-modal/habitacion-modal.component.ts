import { Component, Input, OnInit } from '@angular/core';
import { Habitacion } from '../../models/habitacion.interface';

@Component({
  selector: 'app-habitacion-modal',
  templateUrl: './habitacion-modal.component.html',
  styleUrls: ['./habitacion-modal.component.css'],
})
export class HabitacionModalComponent implements OnInit {
  @Input() habitacion: Habitacion;
  @Input() modalId: string;

  constructor() {}

  ngOnInit(): void {}
}
