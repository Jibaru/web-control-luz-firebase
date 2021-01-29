import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Foco } from '../../models/foco.interface';
import { FocoService } from '../../services/foco.service';

@Component({
  selector: 'app-foco-boton',
  templateUrl: './foco-boton.component.html',
  styleUrls: ['./foco-boton.component.css'],
})
export class FocoBotonComponent implements OnInit {
  @Input() foco: Foco;

  constructor(private focoService: FocoService) {}

  ngOnInit(): void {}

  toggleFoco(): void {
    this.focoService
      .setFocoEstado(this.foco.$key, !this.foco.encendido)
      .then((_) => {
        this.foco.encendido = !this.foco.encendido;
        this.foco.amarillo = this.foco.encendido ? 255 : 0;
        this.foco.rojo = this.foco.encendido ? 255 : 0;
        this.foco.verde = this.foco.encendido ? 255 : 0;
      });
  }

  cerrarModal(): void {}
}
