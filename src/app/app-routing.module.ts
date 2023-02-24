import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

import { AccueilComponent } from './components/accueil/accueil.component';
import { AproposPageComponent } from './components/apropos-page/apropos-page.component';
import { BasketPageComponent } from './components/basket-page/basket-page.component';
import { CreerCompteComponent } from './components/creer-compte/creer-compte.component';
import { EvenementsPageComponent } from './components/evenements-page/evenements-page.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { TennisPageComponent } from './tennis-page/tennis-page.component';
import { SingleEventPageComponent } from './components/single-event-page/single-event-page.component';
import { VolleyPageComponent } from './components/volley-page/volley-page.component';
import { HandballPageComponent } from './components/handball-page/handball-page.component';



const routes: Routes = [
  {path : "Apropos" , component:AproposPageComponent},
  {path : "events" , component:EvenementsPageComponent},
  {path : "" , component:AccueilComponent},
  {path:"singleEvent" , component : SingleEventPageComponent},
  {path:"basket" , component : BasketPageComponent},
  {path : "Contact" , component:ContactComponent},
  {path : "Connexion" , component:AuthentificationComponent},
  {path : "Tennis" , component:TennisPageComponent},
  {path:"volley" , component : VolleyPageComponent},
  {path:"compte" , component : CreerCompteComponent},
  {path:"handball" , component : HandballPageComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
