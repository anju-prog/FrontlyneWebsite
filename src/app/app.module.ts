import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { WhyfrontlyneComponent } from './whyfrontlyne/whyfrontlyne.component';
import { FeaturesComponent } from './features/features.component';
import { WesupportComponent } from './wesupport/wesupport.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { PricingComponent } from './pricing/pricing.component';
import { BsFooterComponent } from './bs-footer/bs-footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SocialmediaiconsComponent } from './socialmediaicons/socialmediaicons.component';
import { TopnavComponent } from './topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    WhyfrontlyneComponent,
    FeaturesComponent,
    WesupportComponent,
    KnowledgeComponent,
    PricingComponent,
    BsFooterComponent,
    AboutusComponent,
    SocialmediaiconsComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'whyfrontlyne', component: WhyfrontlyneComponent },
      { path: 'features', component: FeaturesComponent },
      { path: 'wesupport', component: WesupportComponent },
      { path: 'knowledge', component: KnowledgeComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'aboutus', component: AboutusComponent}


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
