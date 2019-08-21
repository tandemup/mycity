import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

import { NavController} from '@ionic/angular';


import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../../services/user.service';
import { FoodService } from '../../services/food.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-food-profile',
  templateUrl: './food-profile.page.html',
  styleUrls: ['./food-profile.page.scss'],
})
export class FoodProfilePage implements OnInit {

 
  userDetail: Observable<any>;

   // ******** for Cart ***********//
   cart = [];
  constructor(
    public userService: UserService,
    public foodService: FoodService,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService
  ) {
    this.cart = this.foodService.getCart();

   }

  ngOnInit() {
 
  }
  async ionViewWillEnter() {
    this.userDetail = this.userService.getUserProfile();
    this.userService.getUserProfile().subscribe(res => {
      console.log("Get user profile response="+res);
    
    });
  }

 async logout(){
  //this.ionicComponentService.presentLoading();
  await this.userService.signoutUser()
  .then(() => {
     console.log("LOGOUT............");
     //this.ionicComponentService.dismissLoading();
     this.ionicComponentService.presentToast("Logged out", 3000);
     //this.router.navigateByUrl('/side-menu/login?redirectUrl=side-menu/food/tabs/tab1');
    this.router.navigateByUrl('/side-menu/food/tabs/tab1');
      //this.nav.setRoot('AfterLoginPage');
  }, (error) => { 
     var errorMessage: string = error.message;
     console.log("ERROR:"+errorMessage);
     //this.ionicComponentService.dismissLoading();
     this.ionicComponentService.presentToast(errorMessage, 3000);
 
  });
 }
}


