import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent,
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/iniciar-sesion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
