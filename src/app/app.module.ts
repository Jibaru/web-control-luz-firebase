import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { HabitacionModalComponent } from './components/habitacion-modal/habitacion-modal.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';

import { HabitacionService } from './services/habitacion.service';
import { FocoBotonComponent } from './components/foco-boton/foco-boton.component';
import { FocoService } from './services/foco.service';
import { RgbModalComponent } from './components/rgb-modal/rgb-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    PrincipalComponent,
    BarraNavegacionComponent,
    HabitacionComponent,
    HabitacionModalComponent,
    FocoBotonComponent,
    RgbModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [HabitacionService, FocoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
