import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AlertController,NavController} from '@ionic/angular';
import { RealestateService } from '../../services/realestate.service';
import { IonicComponentService } from '../../services/ionic-component.service';
// import { UserService } from '../../services/user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-real-favorite',
  templateUrl: './real-favorite.page.html',
  styleUrls: ['./real-favorite.page.scss'],
})
export class RealFavoritePage implements OnInit {


  categoryId: string;
  viewType: string = "grid";
  //public favorites: any[];
  public favorites: Observable<any[]>;

  constructor(
    public realestateService: RealestateService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    public alertController: AlertController,
    private ionicComponentService: IonicComponentService
  ) { }

  async ngOnInit() {
    //await this.checkAuth();
    await this.getFavorites();
  }


  getFavorites(){
    this.favorites = this.realestateService.getFavHouse();
  }
  deleteFav(id){
   // this.travelService.deleteFavorite(id);
  }


  async deleteFavDialog(itemId: string, slidingItem) {
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
            this.realestateService.removeFavorite(itemId);
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
