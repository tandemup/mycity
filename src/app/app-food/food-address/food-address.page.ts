import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { IonTabs,ModalController,NavController} from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { FoodService } from '../../services/food.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-food-address',
  templateUrl: './food-address.page.html',
  styleUrls: ['./food-address.page.scss'],
})
export class FoodAddressPage implements OnInit {



  public addresses: Observable<any[]>;
  public addressId: string;
  checkedAddress: boolean = false;
  //**** User authentication  ****/
  userAuth: boolean = false; // Is user logged in ?
  constructor( 
    public userService: UserService,
    public foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    //public alertController: AlertController,
    private ionicComponentService: IonicComponentService
  )
    { 
      //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
    console.log(this.router.url,"Current URL");
   
    }

  ngOnInit() {
    this.ionicComponentService.presentTimeoutLoading(2000,true);
    //console.log("___userAuth after received="+this.userAuth);
  }
  async ionViewWillEnter() {
    this.checkedAddress = false;
    this.userAuth =  await this.userService.isLoggedIn();
    this.addresses = this.userService.getAddressByUserId();
  }
//   getSelectedTab(): void {
//     this.activeTabName = this.tabs.getSelected();
//     console.log("current tab name="+this.activeTabName)
// }
  getAddress(){
    // use async pipe //
    console.log("______getAddress()");
    this.addresses = this.userService.getAddressByUserId();
    // this.foodService.getPlacesByCatId( this.categoryId ).subscribe(actionArray => {
    //   console.log(actionArray);
    //   this.places = actionArray
    // });
  }

  selectAddress(index,addressId){
    this.addressId = addressId;
   
  }


  openTest(categoryId){
    console.log("openTest"+ categoryId);
  }

  editAddress(addressId: string){
    console.log("open editAddress"+addressId)
    this.router.navigateByUrl('/food-address-edit/'+addressId);
  }
  gotoPayment(){
    if(this.checkedAddress){
      this.router.navigateByUrl('/food-payment/'+this.addressId);
    }else{
      this.ionicComponentService.presentAlert("Please choose address");
    }
 
  }
}

