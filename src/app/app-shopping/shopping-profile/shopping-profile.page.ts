import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

import { NavController} from '@ionic/angular';


import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../../services/user.service';
import { ShoppingService } from '../../services/shopping.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-shopping-profile',
  templateUrl: './shopping-profile.page.html',
  styleUrls: ['./shopping-profile.page.scss'],
})
export class ShoppingProfilePage implements OnInit {


  userDetail: Observable<any>;

   // ******** for Cart ***********//
   cart = [];
  constructor(
    public userService: UserService,
    public shoppingService: ShoppingService,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService
  ) {
    this.cart = this.shoppingService.getCart();
   }

  ngOnInit() {

  }
  async ionViewWillEnter() {
    console.log('[Chat - ionViewWillEnter]');
    this.userDetail = this.userService.getUserProfile();
    this.userService.getUserProfile().subscribe(res => {
      console.log('Get user profile response=' + res);
    });
  }

 async logout() {
  // this.ionicComponentService.presentLoading();
  await this.userService.signoutUser()
  .then(() => {
    console.log('LOGOUT');
    this.ionicComponentService.presentToast('Logged out', 3000);
    // this.ionicComponentService.dismissLoading();
    this.router.navigateByUrl('/home');
      // this.nav.setRoot('AfterLoginPage');
  }, (error) => {
     const errorMessage = error.message;
     console.log('ERROR:' + errorMessage);
     // this.ionicComponentService.dismissLoading();
     this.ionicComponentService.presentToast(errorMessage, 3000);
  });
 }
}


