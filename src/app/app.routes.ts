import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './componentes/rota/rota.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nova-rota', component: RotaComponent},
  // '**' faz com que qualquer endereco leve ao home
  {path: '**', component:HomeComponent}
];
