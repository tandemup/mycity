import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TravelImageZoomPage } from './travel-image-zoom.page';

const routes: Routes = [
  {
    path: '',
    component: TravelImageZoomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TravelImageZoomPage]
})
export class TravelImageZoomPageModule {}
