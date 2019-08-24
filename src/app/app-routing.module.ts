import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // **************************************//
  // ********** Authentication ************//
  // **************************************//

  // { path: 'listitem', loadChildren: './templates/listitem/listitem.module#ListitemPageModule' },
  // { path: 'auth-main', loadChildren: './app-auth/auth-main/auth-main.module#AuthMainPageModule' },
  { path: 'login', loadChildren: './app-auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './app-auth/register/register.module#RegisterPageModule' },
  { path: 'forgot', loadChildren: './app-auth/forgot/forgot.module#ForgotPageModule' },
  { path: 'profile', loadChildren: './app-auth/profile/profile.module#ProfilePageModule' },
  { path: 'logout', loadChildren: './app-auth/logout/logout.module#LogoutPageModule' },

  // *************************************//
  // ********** Shopping app ************//
  // ************************************//

  { path: 'home', loadChildren: './app-shopping/shopping-home/shopping-home.module#ShoppingHomePageModule' },

  { path: 'shopping-item/:categoryId',
      loadChildren: './app-shopping/shopping-item/shopping-item.module#ShoppingItemPageModule' },

  { path: 'shopping-group/:groupId', loadChildren: './app-shopping/shopping-group/shopping-group.module#ShoppingGroupPageModule' },

  { path: 'shopping-detail/:itemId',
      loadChildren: './app-shopping/shopping-detail/shopping-detail.module#ShoppingDetailPageModule' },

  { path: 'shopping-category',
      loadChildren: './app-shopping/shopping-category/shopping-category.module#ShoppingCategoryPageModule' },

  { path: 'wish-list',
      loadChildren: './app-shopping/shopping-wishlist/shopping-wishlist.module#ShoppingWishlistPageModule' },

  { path: 'my-orders',
      loadChildren: './app-shopping/shopping-my-order/shopping-my-order.module#ShoppingMyOrderPageModule' },



  { path: 'shopping-cart', loadChildren: './app-shopping/shopping-cart/shopping-cart.module#ShoppingCartPageModule' },


  { path: 'shopping-address', loadChildren: './app-shopping/shopping-address/shopping-address.module#ShoppingAddressPageModule' },

  { path: 'shopping-address-add',
      loadChildren: './app-shopping/shopping-address-add/shopping-address-add.module#ShoppingAddressAddPageModule' },

  { path: 'shopping-address-edit/:addressId',
      loadChildren: './app-shopping/shopping-address-edit/shopping-address-edit.module#ShoppingAddressEditPageModule' },


  { path: 'shopping-payment/:addressId',
      loadChildren: './app-shopping/shopping-payment/shopping-payment.module#ShoppingPaymentPageModule' },
   /// ****** check this line ******//
  { path: 'shopping-summary/:addressId/:paymentType',
    loadChildren: './app-shopping/shopping-summary/shopping-summary.module#ShoppingSummaryPageModule' },
  { path: 'shopping-finish', loadChildren: './app-shopping/shopping-finish/shopping-finish.module#ShoppingFinishPageModule' },

  { path: 'shopping-profile', loadChildren: './app-shopping/shopping-profile/shopping-profile.module#ShoppingProfilePageModule' },



  // **************************//
  // ******* Ui layout ********//
  // **************************//

  { path: 'chat', loadChildren: './ui-layouts/chat/chat.module#ChatPageModule' },

  { path: 'contact', loadChildren: './ui-layouts/contact/contact.module#ContactPageModule' },

  { path: 'chat/:id', loadChildren: './ui-layouts/chat/chat.module#ChatPageModule' },

  { path: 'gallery', loadChildren: './ui-layouts/gallery/gallery.module#GalleryPageModule' },
  { path: 'gallery-viewer-modal',
      loadChildren: './ui-layouts/gallery-viewer-modal/gallery-viewer-modal.module#GalleryViewerModalPageModule' },
  { path: 'masonry', loadChildren: './ui-layouts/masonry/masonry.module#MasonryPageModule' },
  { path: 'feed', loadChildren: './ui-layouts/feed/feed.module#FeedPageModule' },
  { path: 'timeline', loadChildren: './ui-layouts/timeline/timeline.module#TimelinePageModule' },
  { path: 'shopping-my-order-detail',
      loadChildren: './app-shopping/shopping-my-order-detail/shopping-my-order-detail.module#ShoppingMyOrderDetailPageModule' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
