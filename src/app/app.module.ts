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
    AproposPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
