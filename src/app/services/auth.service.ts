import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { IniciarSesionRequest } from '../models/iniciar-sesion/iniciar-sesion-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _autenticado: boolean = false;

  constructor(
    private _angularFireAuth: AngularFireAuth
  ) { }

  async iniciarSesion(datos: IniciarSesionRequest): Promise<any> {
    try {
      const resp = await this._angularFireAuth
        .signInWithEmailAndPassword(datos.usuario, datos.clave);
      this._autenticado = true;
      return this._autenticado;
    } catch (err) {
      this._autenticado = false;
      return this._autenticado;
    }
  }

  get estaAutenticado(): boolean {
    return this._autenticado;
  }
}
