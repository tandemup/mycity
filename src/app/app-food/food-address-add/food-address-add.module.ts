import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodAddressAddPage } from './food-address-add.page';

const routes: Routes = [
  {
    path: '',
    component: FoodAddressAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodAddressAddPage]
})
export class FoodAddressAddPageModule {}
