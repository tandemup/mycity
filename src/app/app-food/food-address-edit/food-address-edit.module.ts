import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodAddressEditPage } from './food-address-edit.page';

const routes: Routes = [
  {
    path: '',
    component: FoodAddressEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodAddressEditPage]
})
export class FoodAddressEditPageModule {}
