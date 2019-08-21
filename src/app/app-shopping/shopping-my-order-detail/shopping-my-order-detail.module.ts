import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoppingMyOrderDetailPage } from './shopping-my-order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingMyOrderDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShoppingMyOrderDetailPage]
})
export class ShoppingMyOrderDetailPageModule {}
