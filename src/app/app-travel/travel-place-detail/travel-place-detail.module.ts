import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TravelPlaceDetailPage } from './travel-place-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TravelPlaceDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TravelPlaceDetailPage]
})
export class TravelPlaceDetailPageModule {}
