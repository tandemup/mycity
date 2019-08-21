import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TravelHomePage } from './travel-home.page';

import { IonicRatingModule } from 'ionic4-rating/dist';

import { SharedModule } from '../../shared/shared.module';
//import { HideHeaderDirective } from '../../shared/hide-header.directive';
// import { TravelSearchPageModule } from '../travel-search/travel-search.module';

const routes: Routes = [
  {
    path: '',
    component: TravelHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicRatingModule, // Put ionic-rating module here
    FormsModule,
    IonicModule,
    SharedModule,
    //TravelSearchPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TravelHomePage ]
})
export class TravelHomePageModule {}
