import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoppingTabsPage } from './shopping-tabs.page';
import { UserGuard } from '../../services/user.guard';
const routes: Routes = [
  {
    path: 'tabs',
    component: ShoppingTabsPage,
    children: [
      {
        path: 'tab1', // Home tab
        children: [
              {
                path: '',
                loadChildren: '../shopping-home/shopping-home.module#ShoppingHomePageModule',
              },

            //  { path: 'shopping-payment/:addressId, loadChildren: ',
            // loadChildren: './app-shopping/shopping-payment/shopping-payment.module#ShoppingPaymentPageModule' },
              { path: 'shopping-group/:groupId', loadChildren: '../shopping-group/shopping-group.module#ShoppingGroupPageModule' },
              { path: 'shopping-item/:categoryId', loadChildren: '../shopping-item/shopping-item.module#ShoppingItemPageModule' },
              { path: 'shopping-detail/:itemId',
                loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
        ]
      },
      {
        path: 'tab2', // Category tab
        children: [
              {
                path: '',
                loadChildren: '../shopping-category/shopping-category.module#ShoppingCategoryPageModule',
              },
              { path: 'shopping-item/:categoryId', loadChildren: '../shopping-item/shopping-item.module#ShoppingItemPageModule' },
              { path: 'shopping-detail/:itemId',
                loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
        ]
      },
      {
        path: 'tab3', // Wish list
        children: [
              {
                path: '',
                loadChildren: '../shopping-wishlist/shopping-wishlist.module#ShoppingWishlistPageModule',
                canActivate: [UserGuard]
              },
              { path: 'shopping-item/:categoryId', loadChildren: '../shopping-item/shopping-item.module#ShoppingItemPageModule' },
              { path: 'shopping-detail/:itemId',
                loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }

        ]
      },
      {
        path: 'tab4', // My order
        children: [
              {
                path: '',
                loadChildren: '../shopping-my-order/shopping-my-order.module#ShoppingMyOrderPageModule',
                canActivate: [UserGuard]
              },
              { path: 'shopping-my-order-detail/:orderId',
                loadChildren: '../shopping-my-order-detail/shopping-my-order-detail.module#ShoppingMyOrderDetailPageModule' }    ,
              { path: 'shopping-detail/:itemId',
                loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
        ]
      },
      {
        path: 'tab5', // Profile
        children: [
              {
                path: '',
                loadChildren: '../shopping-profile/shopping-profile.module#ShoppingProfilePageModule',
                canActivate: [UserGuard]
              },
              { path: 'shopping-detail/:itemId',
                loadChildren: '../shopping-detail/shopping-detail.module#ShoppingDetailPageModule' }
        ]
      }
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
  declarations: [ShoppingTabsPage]
})
export class ShoppingTabsPageModule {}
