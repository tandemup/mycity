import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoppingMyOrderPage } from './shopping-my-order.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingMyOrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShoppingMyOrderPage]
})
export class ShoppingMyOrderPageModule {}
