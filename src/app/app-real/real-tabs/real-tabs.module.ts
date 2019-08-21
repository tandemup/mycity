import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RealTabsPage } from './real-tabs.page';
import { UserGuard } from '../../services/user.guard';
const routes: Routes = [
  {
    path: 'tabs',
    component: RealTabsPage,
    children: [
          {
            path: 'tab1', // Home tab
            children: [
                  {
                    path: '',
                    loadChildren: '../real-home/real-home.module#RealHomePageModule',
                  },
                  { path: 'real-list', loadChildren: '../real-list/real-list.module#RealListPageModule' },
                  //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },
                  { path: 'real-agent', loadChildren: '../real-agent/real-agent.module#RealAgentPageModule' },
                  { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                               
            ]
          },

          {

            path: 'tab2', // List / map
            children: [
                  {
                    path: '',
                    loadChildren: '../real-list/real-list.module#RealListPageModule'
                  },
                  { path: 'real-map/:type', loadChildren: '../real-map/real-map.module#RealMapPageModule' },     
                  { path: 'real-list', loadChildren: '../real-list/real-list.module#RealListPageModule' },
                  //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },                 
                  { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                                       
            ]
          },

          {

            path: 'tab3', // Favorite tab
            children: [
                  {
                    path: '',
                    loadChildren: '../real-favorite/real-favorite.module#RealFavoritePageModule',
                    canActivate: [UserGuard]
                  },
                  //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },                  
                  { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                                              
            ]
          },
          {

            path: 'tab4', // Agent tab
            children: [
                  {
                    path: '',
                    loadChildren: '../real-agent/real-agent.module#RealAgentPageModule',
                    canActivate: [UserGuard]
                  },
                  //{ path: 'real-list-detail/:itemId,', loadChildren: '../real-list-detail/real-list-detail.module#RealListDetailPageModule' },                  
                  { path: 'real-agent-detail/:agentId', loadChildren: '../real-agent-detail/real-agent-detail.module#RealAgentDetailPageModule' },
                                              
            ]
          },
          {
            path: 'tab5', // Profile tab
            children: [
                  {
                    path: '',
                    loadChildren: '../real-profile/real-profile.module#RealProfilePageModule',
                    canActivate: [UserGuard]
                  },
                  { path: 'logout', loadChildren: '../../app-auth/logout/logout.module#LogoutPageModule' },
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
  declarations: [RealTabsPage]
})
export class RealTabsPageModule {}
