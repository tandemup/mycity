import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TravelRecommendedPage } from './travel-recommended.page';

const routes: Routes = [
  {
    path: '',
    component: TravelRecommendedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TravelRecommendedPage]
})
export class TravelRecommendedPageModule {}
