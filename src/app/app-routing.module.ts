import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './screens/layout/layout.component';
import {HomeComponent} from './screens/home/home.component';
import {TownComponent} from './screens/town/town.component';
import {AdventureComponent} from './screens/adventure/adventure.component';
import {ShopComponent} from './screens/shop/shop.component';
import {CharacterComponent} from './screens/character/character.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      { path: '', component: HomeComponent },
      { path: 'town', component: TownComponent },
      { path: 'adventure', component: AdventureComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'character', component: CharacterComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
