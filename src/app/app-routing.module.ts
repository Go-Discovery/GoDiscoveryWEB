import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './routes/accueil/accueil.component';
import {LoginComponent} from './routes/login/login.component';
import {RegisterComponent} from './routes/register/register.component';
import {PageNotFoundComponent} from './routes/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'connexion',
    component: LoginComponent
  },
  {
    path : 'enregistrement',
    component: RegisterComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
