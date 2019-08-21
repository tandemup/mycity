import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { IonTabs,ModalController,NavController, LoadingController} from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { ShoppingService } from '../../services/shopping.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-address',
  templateUrl: './shopping-address.page.html',
  styleUrls: ['./shopping-address.page.scss'],
})
export class ShoppingAddressPage implements OnInit {


  public addresses: Observable<any[]>;
  public addressId: string;
  checkedAddress: boolean = false;
  //**** User authentication  ****/
  userAuth: boolean = false; // Is user logged in ?
  constructor( 
    public userService: UserService,
    public shoppingService: ShoppingService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService
  )
    { 
      //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
    console.log(this.router.url,"Current URL");
   
    }

  ngOnInit() {
    this.ionicComponentService.presentTimeoutLoading(2000,true);
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
    console.log("______getAddress()");
    this.addresses = this.userService.getAddressByUserId();
    // this.foodService.getPlacesByCatId( this.categoryId ).subscribe(actionArray => {
    //   console.log(actionArray);
    //   this.places = actionArray
    // });
  }

  selectAddress(index,addressId){
    console.log("select address ="+addressId);
    this.addressId = addressId;
   
  }
  openTest(categoryId){
    console.log("openTest"+ categoryId);
  }

  editAddress(addressId: string){
    console.log("open editAddress")
    this.router.navigateByUrl('/shopping-address-edit/'+addressId);
  }
  gotoPayment(){
    if(this.checkedAddress){
      this.router.navigateByUrl('/shopping-payment/'+this.addressId);
    }else{
      this.ionicComponentService.presentAlert("Please choose address");
    }
  }


}

