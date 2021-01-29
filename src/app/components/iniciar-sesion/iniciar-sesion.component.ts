import { Component, OnInit } from '@angular/core';
import { IniciarSesionRequest } from 'src/app/models/iniciar-sesion/iniciar-sesion-request.interface';
import {Router} from "@angular/router"
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

enum IniciarSesionEstados {
  CARGANDO,
  INICIAL
}

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  public Estados = IniciarSesionEstados;

  iniciarSesionBody: IniciarSesionRequest;
  estado = IniciarSesionEstados.INICIAL;

  constructor(
    private _authService: AuthService,
    private _toastr: ToastrService,
    private router: Router
  ) { 
    this.iniciarSesionBody = {
      usuario: '',
      clave: '',
    };
  }

  iniciarSesion(e): void {
    this.estado = IniciarSesionEstados.CARGANDO;
    this._authService.iniciarSesion(this.iniciarSesionBody)
      .then(resp => {
        if (resp) {
          this.estado = IniciarSesionEstados.INICIAL;
          this.router.navigate(['/principal']);
        } else {
          this.estado = IniciarSesionEstados.INICIAL;
          this._toastr.error('Credenciales incorrectos');
        }
      });
  }

  ngOnInit(): void {
  }

}
