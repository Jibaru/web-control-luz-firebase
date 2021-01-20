import { Component, OnInit } from '@angular/core';
import { IniciarSesionRequest } from 'src/app/models/iniciar-sesion/iniciar-sesion-request.interface';
import {Router} from "@angular/router"

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  inciarSesionBody: IniciarSesionRequest;

  constructor(private router: Router) { 
    this.inciarSesionBody = {
      usuario: '',
      clave: '',
    };
  }

  iniciarSesion(e): void {
    if (this.inciarSesionBody.usuario == 'xyz' && this.inciarSesionBody.clave == '123') {
      this.router.navigate(['/principal']);
    }
  }

  ngOnInit(): void {
  }

}
