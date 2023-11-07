import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTittleComponent } from './components/menu-tittle/menu-tittle.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { FirstLayersComponent } from './pages/first-layers/first-layers.component';
import { SecondLayersComponent } from './pages/second-layers/second-layers.component';
import { WhiteSmallCardComponent } from './components/white-small-card/white-small-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTittleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent,
    FirstLayersComponent,
    SecondLayersComponent,
    WhiteSmallCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
