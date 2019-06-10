import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './screens/layout/layout.component';
import { HomeComponent } from './screens/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { TownComponent } from './screens/town/town.component';
import { AdventureComponent } from './screens/adventure/adventure.component';
import { ShopComponent } from './screens/shop/shop.component';
import { CharacterComponent } from './screens/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    TownComponent,
    AdventureComponent,
    ShopComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
