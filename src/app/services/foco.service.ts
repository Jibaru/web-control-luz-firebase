import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class FocoService {
  constructor(private db: AngularFireDatabase) {}

  async setFocoEstado(focoKey: string, estado: boolean): Promise<any> {
    const rootRef = this.db.database.ref();

    const snap = await rootRef.child('habitaciones').once('value');

    console.log('snap', snap.val());
    const habitaciones = snap.val();
    let habitacionesKeys = Object.keys(snap.val());
    let updateObj = {};
    habitacionesKeys.forEach((key) => {
      if (habitaciones[key].focos[focoKey])
        updateObj[`habitaciones/${key}/focos/${focoKey}/encendido`] = estado;
    });
    updateObj[`focos/${focoKey}/encendido`] = estado;
    return await rootRef.update(updateObj);
  }

  async setRGB(focoKey: string, rojo: number, verde: number, amarillo: number) {
    const rootRef = this.db.database.ref();

    const snap = await rootRef.child('habitaciones').once('value');

    console.log('snap', snap.val());
    const habitaciones = snap.val();
    let habitacionesKeys = Object.keys(snap.val());
    let updateObj = {};
    habitacionesKeys.forEach((key) => {
      if (habitaciones[key].focos[focoKey]){
        updateObj[`habitaciones/${key}/focos/${focoKey}/rojo`] = rojo;
        updateObj[`habitaciones/${key}/focos/${focoKey}/verde`] = verde;
        updateObj[`habitaciones/${key}/focos/${focoKey}/amarillo`] = amarillo;
      }
    });

    updateObj[`focos/${focoKey}/rojo`] = rojo;
    updateObj[`focos/${focoKey}/verde`] = verde;
    updateObj[`focos/${focoKey}/amarillo`] = amarillo;
    return await rootRef.update(updateObj);
  }
}
