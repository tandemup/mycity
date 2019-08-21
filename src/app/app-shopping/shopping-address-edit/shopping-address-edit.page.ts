import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { NavController} from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { ShoppingService } from '../../services/shopping.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-shopping-address-edit',
  templateUrl: './shopping-address-edit.page.html',
  styleUrls: ['./shopping-address-edit.page.scss'],
})
export class ShoppingAddressEditPage implements OnInit {

  public address: Observable<any[]>;
  public addressId: string;
  public addressForm: FormGroup;

  constructor( 
    public userService: UserService,
    public shoppingService: ShoppingService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService,
    public formBuilder: FormBuilder
  )
    { 
    this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');
    this.addressForm = this.formBuilder.group({
      label: ['', Validators.required],
      fullname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required]

  }); 

    }

  ngOnInit() {
    //this.getPlace();
    this.userService.getAddressById(this.addressId).subscribe(res => {
      console.log("----->actionArray="+res);
      console.log("Get user profile response="+res);
      console.log("----->userDetailSub="+res.firstname);
      console.log("----->userDetailSub="+res.lastname);
      this.addressForm.get('label').setValue( res.label);
      this.addressForm.get('fullname').setValue( res.fullname);
      this.addressForm.get('phone').setValue( res.phone);
      this.addressForm.get('address').setValue( res.address);
      //this.addressArray = res;
    });
  }


  
  // openMap(categoryId) {
    
  //   console.log("openMap");
  //   this.modalController.create({
  //     component: TravelMapPage,
  //     componentProps: {
  //       categoryId: categoryId
  //     }
  //   }).then(modal => {
  //     modal.present();
  //   });
  // }

  async editAddress(){
    // console.log("userProfileId="+this.userService.getUserId());
     console.log("_____call addAddress");
     if (!this.addressForm.valid){
       console.log(this.addressForm.value);
       console.log("____addressForm invalid ") 
       //this.presentAlert("invalid form");
     } else {
      this.ionicComponentService.presentLoading();
       await this.userService.editAddress(
         this.addressId,
         this.addressForm.value.label, 
         this.addressForm.value.fullname, 
         this.addressForm.value.phone,
         this.addressForm.value.address
       )
      // await console.log("2");
       .then(  () => {
            // call loading 
            // close loading
            this.ionicComponentService.dismissLoading();
           this.router.navigateByUrl('/shopping-address');
           //loadingPopup.dismiss();
           //this.nav.setRoot('AfterLoginPage');
       }, (error) => { 
          var errorMessage: string = error.message;
          console.log("ERROR:"+errorMessage);
          this.ionicComponentService.dismissLoading();   
          this.ionicComponentService.presentToast(errorMessage,4000);  
           //loadingPopup.dismiss();
           //this.presentAlert(errorMessage);      
       });
   
     }
   }
  // openTest(categoryId){
  //   console.log("openTest"+ categoryId);
  // }
  async delAddress(){
    this.ionicComponentService.presentLoading();
    await this.userService.deleteAddress(this.addressId,)
    .then(  () => {
         // call loading 
       this.ionicComponentService.dismissLoading();
        this.router.navigateByUrl('/shopping-address');
    
    }, (error) => { 
       var errorMessage: string = error.message;
       console.log("ERROR:"+errorMessage);
       this.ionicComponentService.dismissLoading();
       this.ionicComponentService.presentToast(errorMessage,4000);  
    });
}



}

