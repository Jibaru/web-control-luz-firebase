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
      if (habitaciones[key].focos[focoKey]) {
        updateObj[`habitaciones/${key}/focos/${focoKey}/encendido`] = estado;
        updateObj[`habitaciones/${key}/focos/${focoKey}/rojo`] = estado
          ? 255
          : 0;
        updateObj[`habitaciones/${key}/focos/${focoKey}/amarillo`] = estado
          ? 255
          : 0;
        updateObj[`habitaciones/${key}/focos/${focoKey}/verde`] = estado
          ? 255
          : 0;
      }
    });
    updateObj[`focos/${focoKey}/encendido`] = estado;
    updateObj[`focos/${focoKey}/rojo`] = estado ? 255 : 0;
    updateObj[`focos/${focoKey}/amarillo`] = estado ? 255 : 0;
    updateObj[`focos/${focoKey}/verde`] = estado ? 255 : 0;
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
      if (habitaciones[key].focos[focoKey]) {
        updateObj[`habitaciones/${key}/focos/${focoKey}/rojo`] = rojo;
        updateObj[`habitaciones/${key}/focos/${focoKey}/verde`] = verde;
        updateObj[`habitaciones/${key}/focos/${focoKey}/amarillo`] = amarillo;

        if (rojo === 0 && verde === 0 && amarillo === 0) {
          updateObj[`habitaciones/${key}/focos/${focoKey}/encendido`] = false;
        } else {
          updateObj[`habitaciones/${key}/focos/${focoKey}/encendido`] = true;
        }
      }
    });

    updateObj[`focos/${focoKey}/rojo`] = rojo;
    updateObj[`focos/${focoKey}/verde`] = verde;
    updateObj[`focos/${focoKey}/amarillo`] = amarillo;

    if (rojo === 0 && verde === 0 && amarillo === 0) {
      updateObj[`focos/${focoKey}/encendido`] = false;
    } else {
      updateObj[`focos/${focoKey}/encendido`] = true;
    }
    return await rootRef.update(updateObj);
  }
}
