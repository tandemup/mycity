import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavController, LoadingController} from '@ionic/angular';

import { TravelService } from '../../services/travel.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';
import { TravelMapModalPage } from '../travel-map-modal/travel-map-modal.page';

@Component({
  selector: 'app-travel-place',
  templateUrl: './travel-place.page.html',
  styleUrls: ['./travel-place.page.scss'],
})
export class TravelPlacePage implements OnInit {
  public places: any[];
  //public places: Observable<Place[]>;
  public categoryId: any;

  constructor( 
    public travelService: TravelService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService,
    private modalController: ModalController) 
    { 
      this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
      console.log(this.router.url,"Current URL");
    }

  ngOnInit() {
    this.getPlace();
  }

  getPlace(){
    console.log("call  getPlace()");
    this.travelService.getPlacesByCatId( this.categoryId ).subscribe(actionArray => {
      console.log(actionArray);
      this.places = actionArray
    });
  }

  async openMap(categoryId) {
    console.log("openModal");
    const modal = await this.modalController.create({
      component: TravelMapModalPage,
      cssClass: '',
      componentProps: {
        categoryId: categoryId
      }
    });
    return await modal.present();
  }


}
