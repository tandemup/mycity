import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TravelPlaceReviewPage } from './travel-place-review.page';
import { IonicRatingModule  } from "ionic4-rating/dist";
const routes: Routes = [
  {
    path: '',
    component: TravelPlaceReviewPage
  }
];

@NgModule({
  imports: [
    IonicRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TravelPlaceReviewPage]
})
export class TravelPlaceReviewPageModule {}
