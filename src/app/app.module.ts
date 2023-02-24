import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBar1Component } from './components/nav-bar1/nav-bar1.component';
import { NavBar2Component } from './components/nav-bar2/nav-bar2.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { DisciplineSectionComponent } from './components/discipline-section/discipline-section.component';
import { EventSectionComponent } from './components/event-section/event-section.component';
import { ContactComponent } from './components/contact/contact.component';
import { EvenementsPageComponent } from './components/evenements-page/evenements-page.component';
import { AproposPageComponent } from './components/apropos-page/apropos-page.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { TennisPageComponent } from './tennis-page/tennis-page.component';
import { SingleEventPageComponent } from './components/single-event-page/single-event-page.component';
import { BasketPageComponent } from './components/basket-page/basket-page.component';
import { VolleyPageComponent } from './components/volley-page/volley-page.component';
import { CreerCompteComponent } from './components/creer-compte/creer-compte.component';
import { HandballPageComponent } from './components/handball-page/handball-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBar1Component,
    NavBar2Component,
    FooterComponent,
    AccueilComponent,
    IntroSectionComponent,
    InfoSectionComponent,
    DisciplineSectionComponent,
    EventSectionComponent,
    ContactComponent,
    EvenementsPageComponent,
    AproposPageComponent,
    AuthentificationComponent,
    TennisPageComponent,
    SingleEventPageComponent,
    BasketPageComponent,
    VolleyPageComponent,
    CreerCompteComponent,
    HandballPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
