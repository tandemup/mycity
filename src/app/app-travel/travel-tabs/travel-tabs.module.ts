import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TravelTabsPage } from './travel-tabs.page';
import { UserGuard } from '../../services/user.guard';
const routes: Routes = [
  {
    path: 'tabs',
    component: TravelTabsPage,
    children: [
          {
            path: 'tab1', // Home tab
            children: [
                  {
                    path: '',
                    loadChildren: '../travel-home/travel-home.module#TravelHomePageModule',
                  },
                  { path: 'travel-category', loadChildren: '../travel-category/travel-category.module#TravelCategoryPageModule' },
                  { path: 'travel-recommended', loadChildren: '../travel-recommended/travel-recommended.module#TravelRecommendedPageModule' },
                  { path: 'travel-favorite', loadChildren: '../travel-favorite/travel-favorite.module#TravelFavoritePageModule' },
                  
                  { path: 'travel-tag/:tagId', loadChildren: '../travel-tag/travel-tag.module#TravelTagPageModule' },
                  // { path: 'travel-tags', loadChildren: '../travel-tags/travel-tags.module#TravelTagsPageModule' },
                  { path: 'travel-place/:categoryId', loadChildren: '../travel-place/travel-place.module#TravelPlacePageModule' },
                  { path: 'travel-place-review/:placeId', loadChildren: '../travel-place-review/travel-place-review.module#TravelPlaceReviewPageModule' },
                  { path: 'travel-place-review-add/:placeId', loadChildren: '../travel-place-review-add/travel-place-review-add.module#TravelPlaceReviewAddPageModule' },

                  { path: 'travel-place-detail/:placeId', loadChildren: '../travel-place-detail/travel-place-detail.module#TravelPlaceDetailPageModule' },                   
            ]
          },

          {

            path: 'tab2', // Category tab
            children: [
                  {
                    path: '',
                    loadChildren: '../travel-category/travel-category.module#TravelCategoryPageModule'
                  },
                  { path: 'travel-recommended', loadChildren: '../travel-recommended/travel-recommended.module#TravelRecommendedPageModule' },
                  { path: 'travel-favorite', loadChildren: '../travel-favorite/travel-favorite.module#TravelFavoritePageModule' },
                  { path: 'travel-place/:categoryId', loadChildren: '../travel-place/travel-place.module#TravelPlacePageModule' },
                  { path: 'travel-place-review/:placeId', loadChildren: '../travel-place-review/travel-place-review.module#TravelPlaceReviewPageModule' },
                  { path: 'travel-place-detail/:placeId', loadChildren: '../travel-place-detail/travel-place-detail.module#TravelPlaceDetailPageModule' }              
            ]
          },

          {

            path: 'tab3', // Favorite tab
            children: [
                  {
                    path: '',
                    loadChildren: '../travel-favorite/travel-favorite.module#TravelFavoritePageModule',
                    canActivate: [UserGuard]
                  },
                  { path: 'travel-place/:categoryId', loadChildren: '../travel-place/travel-place.module#TravelPlacePageModule' },
                  { path: 'travel-place-review/:placeId', loadChildren: '../travel-place-review/travel-place-review.module#TravelPlaceReviewPageModule' },
                  { path: 'travel-place-detail/:placeId', loadChildren: '../travel-place-detail/travel-place-detail.module#TravelPlaceDetailPageModule' },                   
            ]
          },
          // {
          //   path: 'tab4',
          //   loadChildren: '../travel-category/travel-category.module#TravelCategoryPageModule'
          // }, 
          // { path: 'tab3/products', loadChildren: '../tab2/product-list/product-list.module#ProductListPageModule' },
          // { path: 'tab3/products/:id', loadChildren: '../tab2/view-product/view-product.module#ViewProductPageModule' },
        
          {
            path: 'tab4', // Map  tab
            children: [
                  {
                    path: '',
                    loadChildren: '../travel-map/travel-map.module#TravelMapPageModule'
                  },
        
                  { path: 'travel-place-review/:placeId', loadChildren: '../travel-place-review/travel-place-review.module#TravelPlaceReviewPageModule' },
                  { path: 'travel-place-detail/:placeId', loadChildren: '../travel-place-detail/travel-place-detail.module#TravelPlaceDetailPageModule' },                   
            ]
          },
          {
            path: 'tab5', // Profile tab
            children: [
                  {
                    path: '',
                    loadChildren: '../travel-profile/travel-profile.module#TravelProfilePageModule',
                    canActivate: [UserGuard]
                  }            
            ]
          },
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
  declarations: [TravelTabsPage]
})
export class TravelTabsPageModule {}
