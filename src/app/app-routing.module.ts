import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

import { AccueilComponent } from './components/accueil/accueil.component';
import { AproposPageComponent } from './components/apropos-page/apropos-page.component';
import { EvenementsPageComponent } from './components/evenements-page/evenements-page.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { TennisPageComponent } from './tennis-page/tennis-page.component';


const routes: Routes = [
  {path : "Apropos" , component:AproposPageComponent},
  {path : "events" , component:EvenementsPageComponent},
  {path : "" , component:AccueilComponent},
  {path : "Contact" , component:ContactComponent},
  {path : "Connexion" , component:AuthentificationComponent},
  {path : "Tennis" , component:TennisPageComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
