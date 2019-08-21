import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoppingHomePage } from './shopping-home.page';
import { SharedModule } from '../../shared/shared.module';
// import { HideHeaderDirective } from '../../directives/hide-header.directive';
// import { TravelSearchPageModule } from '../travel-search/travel-search.module';
const routes: Routes = [
  {
    path: '',
    component: ShoppingHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShoppingHomePage]
})
export class ShoppingHomePageModule {}
