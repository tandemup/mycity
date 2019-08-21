import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoppingAddressEditPage } from './shopping-address-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingAddressEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShoppingAddressEditPage]
})
export class ShoppingAddressEditPageModule {}
