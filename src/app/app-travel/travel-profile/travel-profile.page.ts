import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';



import { AlertController,LoadingController,NavController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';

import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-travel-profile',
  templateUrl: './travel-profile.page.html',
  styleUrls: ['./travel-profile.page.scss'],
})
export class TravelProfilePage implements OnInit {
 
  userDetail: Observable<any>;


  constructor(
    public userService: UserService,
    private navController: NavController,
    public router: Router,
    private loadingController: LoadingController ,
    //private modalController: ModalController

  ) {
   

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
  //  this.userService.signoutUser();
  //  this.router.navigateByUrl('/side-menu/travel/tabs/tab1');

  await this.userService.signoutUser()
  .then(() => {
    console.log("LOGOUT");
    this.router.navigateByUrl('/login');
      //loadingPopup.dismiss();
      //this.nav.setRoot('AfterLoginPage');
  }, (error) => { 
     var errorMessage: string = error.message;
     console.log("ERROR:"+errorMessage);
      //loadingPopup.dismiss();
      //this.presentAlert(errorMessage);      
  });
 }
}
