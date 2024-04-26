import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './componentes/rota/rota.component';
import { ClientDetailComponent } from './componentes/client-detail/client-detail.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nova-rota', component: RotaComponent},
  // tem ligacao com o ClientDetail
  {path: 'cliente/:id', component: ClientDetailComponent},
  // '**' faz com que qualquer endereco leve ao home
  // sempre que tem que estar por ultimo
  {path: '**', component:HomeComponent},
];
