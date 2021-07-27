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
import { Sf1Component } from './sf1/sf1.component';
import { Sf2Component } from './sf2/sf2.component';
import { Sf3Component } from './sf3/sf3.component';
import { Sf4Component } from './sf4/sf4.component';
import { Sf5Component } from './sf5/sf5.component';
import { Sf6Component } from './sf6/sf6.component';

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
    TopnavComponent,
    Sf1Component,
    Sf2Component,
    Sf3Component,
    Sf4Component,
    Sf5Component,
    Sf6Component
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
      { path: 'aboutus', component: AboutusComponent},
      { path: 'sf1', component: Sf1Component},
      { path: 'sf2', component: Sf2Component},
      { path: 'sf3', component: Sf3Component},
      { path: 'sf4', component: Sf4Component},
      { path: 'sf5', component: Sf5Component},
      { path: 'sf6', component: Sf6Component}


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
