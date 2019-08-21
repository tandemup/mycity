import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RealImageGalleryPage } from './real-image-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: RealImageGalleryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RealImageGalleryPage]
})
export class RealImageGalleryPageModule {}
