import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodTabsPage } from './food-tabs.page';
import { UserGuard } from '../../services/user.guard';
const routes: Routes = [
  {
    path: 'tabs',
    component: FoodTabsPage,
    children: [
      // {
      //   path: 'tab1',
      //   loadChildren: '../food-home/food-home.module#FoodHomePageModule'
      // },
      {
        path: 'tab1', // Home tab
        children: [
              {
                path: '',
                loadChildren: '../food-home/food-home.module#FoodHomePageModule',
              },
              { path: 'food-cart', loadChildren: '../food-cart/food-cart.module#FoodCartPageModule' },
              { path: 'food-category', loadChildren: '../food-category/food-category.module#FoodCategoryPageModule' },
              { path: 'food-item/:categoryId', loadChildren: '../food-item/food-item.module#FoodItemPageModule' },
              { path: 'food-detail/:itemId', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule'}               
        ]
      },
      {
        path: 'tab2', // Food menu tab
        children: [
              {
                path: '',
                loadChildren: '../food-category/food-category.module#FoodCategoryPageModule',
              },
              { path: 'food-item/:categoryId', loadChildren: '../food-item/food-item.module#FoodItemPageModule' },
              { path: 'food-detail/:itemId', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule' }            
        ]
      },
      {
        path: 'tab3', // My order tab
        children: [
              {
                path: '',
                loadChildren: '../food-myorder/food-myorder.module#FoodMyorderPageModule',
                canActivate: [UserGuard]
              },
              { path: 'food-myorder-detail/:orderId', loadChildren: '../food-myorder-detail/food-myorder-detail.module#FoodMyorderDetailPageModule' },
              { path: 'food-detail/:itemId', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule' }   
            
        ]
      },
      {
        path: 'tab4', // Cart tab
        children: [
              {
                path: '',
                loadChildren: '../food-cart/food-cart.module#FoodCartPageModule',
              },
              { path: 'food-detail', loadChildren: '../food-detail/food-detail.module#FoodDetailPageModule' }               
        ]
      },
      {
        path: 'tab5', // Profile tab
        children: [
              {
                path: '',
                loadChildren: '../food-profile/food-profile.module#FoodProfilePageModule',
                canActivate: [UserGuard]
              },
              { path: 'food-myorder', loadChildren: '../food-myorder/food-myorder.module#FoodMyorderPageModule' }    
            
        ]
      },
      // {
      //   path: 'tab2',
      //   loadChildren: '../food-category/food-category.module#FoodCategoryPageModule'
      // }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodTabsPage]
})
export class FoodTabsPageModule {}
