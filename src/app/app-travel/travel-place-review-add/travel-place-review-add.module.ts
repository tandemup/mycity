import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicRatingModule  } from "ionic4-rating/dist";
import { TravelPlaceReviewAddPage } from './travel-place-review-add.page';

const routes: Routes = [
  {
    path: '',
    component: TravelPlaceReviewAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicRatingModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TravelPlaceReviewAddPage]
})
export class TravelPlaceReviewAddPageModule {}
