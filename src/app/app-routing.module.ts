import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './routes/accueil/accueil.component';
import {LoginComponent} from './routes/login/login.component';
import {RegisterComponent} from './routes/register/register.component';
import {PageNotFoundComponent} from './routes/page-not-found/page-not-found.component';
import {AuthGuard} from "./guard/auth.guard";


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
    path: 'profil',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'inscription',
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
