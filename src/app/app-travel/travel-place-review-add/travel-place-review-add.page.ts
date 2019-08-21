import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { IonContent ,ModalController,NavParams,NavController} from '@ionic/angular';
import { IonicComponentService} from '../../services/ionic-component.service';
import { TravelService } from '../../services/travel.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-travel-place-review-add',
  templateUrl: './travel-place-review-add.page.html',
  styleUrls: ['./travel-place-review-add.page.scss'],
})
export class TravelPlaceReviewAddPage implements OnInit {
  userDetail: Observable<any>;
  userId: any;
  userProfileImage: string = "https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
  placeId: any;


  rating: any=1;
  userAuth: boolean = false;

  
  public reviewForm: FormGroup;

  constructor(
    public travelService: TravelService,
    public userService: UserService,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService,
    private modalController: ModalController,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute
  ){
    this.placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
// Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
//  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
// https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
// https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7

    this.reviewForm = formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(0), Validators.required])],
      comment: ['', Validators.compose([Validators.minLength(0), Validators.required])],
    });
  }

  ngOnInit() {
    // check auth
    this.checkAuth();

  }

  async checkAuth()  {
    const user = await this.userService.isLoggedIn();
    if (user) {
      // do something
      //this.userId = await user.uid;
      console.log("********** userId="+await user.uid);
      await console.log("*********** YES USER already logged in")
      this.userAuth = true;
    } else {
      this.userAuth = false;
      console.log("*************NO");
    }
  }


  goSignin(){
    this.close();
    this.router.navigateByUrl('/side-menu/login?redirectUrl=side-menu/travel/tabs/tab1');
      // call close
      // redirect
  }
  submitFormTest(){
    if (!this.reviewForm.valid){
      console.log(this.reviewForm.value);
      //this.presentAlert("invalid form");
      console.log("invalid form")
    } else {
      console.log(this.reviewForm.value);
      console.log("yes, ")
      //this.userService.loginUser()
    }
  }

  async addReview(){

    console.log("_____call addReview");
    if (!this.reviewForm.valid){
      console.log(this.reviewForm.value);
      console.log("____reviewForm invalid ")
      //this.presentAlert("invalid form");
    } else {

      this.ionicComponentService.presentLoading();

      console.log(this.reviewForm.value);
      console.log("___yes, ")
      console.log("_____placeId="+this.placeId);
      console.log("1");

      //****** add review *******//
      await this.travelService.addReview(
        this.placeId,
        this.userProfileImage,
        this.reviewForm.value.name, 
        this.rating,
        this.reviewForm.value.comment
      )
     // await console.log("2");
      .then(  () => {
          this.ionicComponentService.dismissLoading();
          this.close();
          //this.router.navigateByUrl('/side-menu/travel/tabs/tab1');
          //loadingPopup.dismiss();
          //this.nav.setRoot('AfterLoginPage');
      }, (error) => { 
         var errorMessage: string = error.message;
         console.log("ERROR:"+errorMessage);
         this.ionicComponentService.dismissLoading();
         this.ionicComponentService.presentToast(errorMessage,3000);
         this.close();
     
      });
  
    }
  }


  async close(){
    await this.modalController.dismiss();
  }

}
