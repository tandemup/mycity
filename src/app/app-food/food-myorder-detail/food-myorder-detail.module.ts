import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodMyorderDetailPage } from './food-myorder-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FoodMyorderDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodMyorderDetailPage]
})
export class FoodMyorderDetailPageModule {}
