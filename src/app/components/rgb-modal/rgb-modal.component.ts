import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Foco } from 'src/app/models/foco.interface';
import { FocoService } from 'src/app/services/foco.service';

@Component({
  selector: 'app-rgb-modal',
  templateUrl: './rgb-modal.component.html',
  styleUrls: ['./rgb-modal.component.css'],
})
export class RgbModalComponent implements OnInit {
  @Input() modalId: string;
  @Input() foco: Foco;

  mensajeActualizado: string = '';

  constructor(private focoService: FocoService) {}

  async cambiarRGB(): Promise<void> {
    await this.focoService.setRGB(
      this.foco.$key,
      this.foco.rojo,
      this.foco.verde,
      this.foco.amarillo
    );

    if (
      this.foco.rojo === 0 &&
      this.foco.amarillo === 0 &&
      this.foco.verde === 0
    ) {
      this.foco.encendido = false;
    } else {
      this.foco.encendido = true;
    }

    this.mensajeActualizado = 'Actualizado';

    setTimeout(() => (this.mensajeActualizado = ''), 4000);
  }

  ngOnInit(): void {}
}
