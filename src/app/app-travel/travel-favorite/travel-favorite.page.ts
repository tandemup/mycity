import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AlertController,NavController} from '@ionic/angular';

import { TravelService } from '../../services/travel.service';
// import { UserService } from '../../services/user.service';
import { Observable, Subscription } from 'rxjs';




@Component({
  selector: 'app-travel-favorite',
  templateUrl: './travel-favorite.page.html',
  styleUrls: ['./travel-favorite.page.scss'],
})
export class TravelFavoritePage implements OnInit {

  // userAuth: boolean = false;
  // userId: any; 
  categoryId: string;
  viewType: string = "grid";
  //public favorites: any[];
  public favorites: Observable<any[]>;
  constructor(
    public travelService: TravelService,
    // public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    public alertController: AlertController
  ) { }

  async ngOnInit() {
    await this.getFavorites();
  }


  getFavorites(){
    console.log(">>>>>>>>> call getFavorite")
    this.favorites = this.travelService.getFavPlace();
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
            this.travelService.removeFavorite(placeId);
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
