import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { ShoppingService } from '../../services/shopping.service';
import { IonicComponentService } from '../../services/ionic-component.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-summary',
  templateUrl: './shopping-summary.page.html',
  styleUrls: ['./shopping-summary.page.scss'],
})
export class ShoppingSummaryPage implements OnInit {
  orderItems = [];
  total = 0;
  totalVat: number;
  totalValue: number = 0;

  public address: Observable<any>;
  public item: Observable<any[]>;

  private userProfileId: any;
  addressId: string;
  paymentType: string;
  itemCart: any;
  orderId: any;



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
      //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
      console.log(this.router.url,"Current URL");

      this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');
      this.paymentType = this.activatedRoute.snapshot.paramMap.get('paymentType');
      console.log("_____________addressId="+this.addressId);
      console.log("paymentType="+this.paymentType);

    }


  ngOnInit() {
    // get item in cart

    // get address detail
    this.address = this.userService.getAddressById(this.addressId);
    // convert payment code to readable 
    
    //this.userProfileId = this.userService.getUserId();
    
  }
  ionViewWillEnter() {

    this.getCartProduct() 
   // this.totalVat = this.total + ]
  }
  
  getCartProduct() {
    // this.cartProducts = this.productService.getLocalCartProducts();
   
   
     const items = this.shoppingService.getCart();
     console.log("page not refresh__________________shopping-cart : items="+items);
     const selected = {};
     this.totalValue = 0;
   
     for (const obj of items) {
       this.totalValue += obj.price;
     }
   
   
     this.orderItems = items;
     console.log("..............Order items ="+JSON.stringify(this.orderItems));
     this.total =this.totalValue;
   
   }

  async addOrder(){
   // console.log("userProfileId="+this.userService.getUserId());
      //****** loading *******//
      this.ionicComponentService.presentLoading();
      this.shoppingService.placeOrder(this.addressId, this.paymentType, this.orderItems, this.total )
        .then(
          () => {
            //this.router.navigateByUrl('/home');
            console.log("_____________New item added.")
           this.ionicComponentService.dismissLoading();
           this.router.navigateByUrl('/shopping-finish' );
            //this.navController.goForward(`/person/${this.catId}?something=${encodeURI(somethingValue)}`);
            //this.navController.goForward('/crud-item/${this.catId}');
            //this.navController.navigateForward('/crud-item');
          },
          error => {
            console.log(error);
            this.ionicComponentService.presentToast(error, 3000);
            this.ionicComponentService.dismissLoading();
          }
        );

  }


}
