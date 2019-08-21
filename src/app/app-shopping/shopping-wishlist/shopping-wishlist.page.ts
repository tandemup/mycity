import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AlertController,NavController,} from '@ionic/angular';
import { ShoppingService } from '../../services/shopping.service';
// import { UserService } from '../../services/user.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-wishlist',
  templateUrl: './shopping-wishlist.page.html',
  styleUrls: ['./shopping-wishlist.page.scss'],
})
export class ShoppingWishlistPage implements OnInit {


  // userAuth: boolean = false;
  // userId: any; 
  categoryId: string;
  viewType: string = "grid";
  //public wishlists: any[];
    // ******** for Cart ***********//
    cart = [];
  public wishlists: Observable<any[]>;
  constructor(
    public shoppingService: ShoppingService,
    // public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    public alertController: AlertController,
 
  ) { }

   ngOnInit() {
    //await this.checkAuth();
    console.log(">>>>>>>>> call getFavorite")
    this.wishlists = this.shoppingService.getWishlist();
    this.cart = this.shoppingService.getCart();
  }
  // async checkAuth()  {
  //   const user = await this.userService.isLoggedIn();
  //   if (user) {
  //     // do something
  //     //this.userId = await user.uid;
  //     console.log("********** FAVORITE ="+await user.uid);
  //     console.log("*********** YES USER already logged in")
  //     this.userAuth = true;
  //     this.userId = user.uid;

      
  //   } else {
  //     this.userAuth = false;
  //     console.log("*************NO");
  //   }
  // }


  getwishlists(){
    console.log(">>>>>>>>> call getFavorite")
    this.wishlists = this.shoppingService.getWishlist();
    // this.travelService.getFavPlace().subscribe(res => {
    //   console.log("**************Get Favorite response="+res);
    
    //   this.wishlists = res
    // });
  }
  deleteFav(id){
   // this.travelService.deleteFavorite(id);
  }


  async deleteFavDialog(placeId: string, slidingItem) {
    // Sliding not working after updating an element in array  https://github.com/ionic-team/ionic/issues/15486
    // Closing slidingItem
    slidingItem.close();
    const alert = await this.alertController.create({
      header: '',
      message: 'Do you want to <strong>delete</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Okay');
            //this.shoppingService.removeFavorite(placeId);
            // removeFavorite(
            //   placeId: string, 
            //   userId: string
            // )
          }
        }
      ]
    });
    await alert.present();
  }
}

