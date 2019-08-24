import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  avatar = 'https://firebasestorage.googleapis.com/v0/b/tamargy-b9696.appspot.com/o/user-img.png?alt=media&token=86e7728b-6783-412a-91ff-ade506819382';
  selectedPath = '';

  pages = [

    {
      title: 'Home',
      url:  '/home',
      icon: 'ios-home'
    },

    {
      title: 'Contacts',
      url:  '/contact',
      icon: 'ios-people'
    },

    {
      title: 'Category',
      url: '/shopping-category',
      icon: 'ios-list'
    },

    {
      title: 'Wishlist',
      url: '/wish-list',
      icon: 'ios-archive'
    },

    {
      title: 'My Orders',
      url: '/my-orders',
      icon: 'ios-alarm'
    },


    // ******************************//
    // ********** Authentication*********//
    // ******************************//
    {
      title: 'Authentication',
      children: [
        {
          title: 'Login',
          url: '/side-menu/login'
        },
        {
          title: 'Register',
          url: '/side-menu/register'
        },
        {
          title: 'Profile',
          url: '/side-menu/profile'
        },
        {
          title: 'Forgot',
          url: '/side-menu/forgot'
        },
      ]
    },
    // ******************************//
    // ********** ui layout *********//
    // ******************************//
    {
      title: 'UI layouts',
      children: [
        // {
        //   title: 'chart',
        //   url: '/side-menu/chart',
        //   icon: ''
        // },
        {
          title: 'chat',
          url: '/side-menu/chat',
          icon: ''
        },
        {
          title: 'feed',
          url: '/side-menu/feed',
          icon: ''
        },
        // {
        //   title: 'form',
        //   url: '/side-menu/form',
        //   icon: ''
        // },
        {
          title: 'gallery',
          url: '/side-menu/gallery',
          icon: ''
        },
        // {
        //   title: 'intro',
        //   url: '/side-menu/intro',
        //   icon: ''
        // },
        {
          title: 'profile1',
          url: '/side-menu/profile1',
          icon: ''
        },
        {
          title: 'profile2',
          url: '/side-menu/profile2',
          icon: ''
        },
        // {
        //   title: 'profile3',
        //   url: '/side-menu/profile3',
        //   icon: ''
        // },
        // {
        //   title: 'profile4',
        //   url: '/side-menu/profile4',
        //   icon: ''
        // },
        {
          title: 'masonry',
          url: '/side-menu/masonry',
          icon: ''
        },
        // {
        //   title: 'search',
        //   url: '/side-menu/search',
        //   icon: ''
        // },
        {
          title: 'timeline',
          url: '/side-menu/timeline',
          icon: ''
        }
      ]
    },
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();

    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
    this.platform.pause.subscribe(() => {
      console.log('[APP] gonna to background');
    });

    this.platform.resume.subscribe(() => {
      console.log('[APP] came back to forground');
    });

    window.addEventListener('beforeunload', () => {
      this.OptionsSave();
    });
  }

  OptionsSave() {
    console.log('[APP] will be closed');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
