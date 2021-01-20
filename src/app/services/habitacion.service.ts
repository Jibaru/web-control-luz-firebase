import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Habitacion } from '../models/habitacion.interface';

@Injectable({
  providedIn: 'root',
})
export class HabitacionService {

  constructor(private db: AngularFireDatabase) {
  }

  async getHabitaciones(): Promise<Habitacion[]> {
    const consulta = await this.db.database.ref("/habitaciones").once("value");
    const habitacionesObj = consulta.val();
    const habitacionesKeys = Object.keys(habitacionesObj);
    const habitaciones: Habitacion[] = [];
    habitacionesKeys.forEach(key => {
      habitaciones.push({
        $key: key,
        nombre: habitacionesObj[key].nombre,
        descripcion: habitacionesObj[key].descripcion,
        focos: Object.keys(habitacionesObj[key].focos).map((keyFoco) => {
          return {
            $key: keyFoco,
            ...habitacionesObj[key].focos[keyFoco],
          };
        })
      });
    });
    return  habitaciones;
  }

}
