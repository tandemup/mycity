import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController, NavController, LoadingController} from '@ionic/angular';

import { TravelService } from '../../services/travel.service';
import { Observable, Subscription } from 'rxjs';


// import travel-place-review-add page for modal
import { TravelPlaceReviewAddPage } from '../travel-place-review-add/travel-place-review-add.page';


@Component({
  selector: 'app-travel-place-review',
  templateUrl: './travel-place-review.page.html',
  styleUrls: ['./travel-place-review.page.scss'],
})
export class TravelPlaceReviewPage implements OnInit {

  //reviews: any[];
  public reviews: Observable<any[]>;
  public placeId: any;

  rate = 3;
  constructor(
    public travelService: TravelService,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private navController: NavController,
    public router: Router,
    private loadingController: LoadingController
  ) { 
    this.placeId = this.activatedRoute.snapshot.paramMap.get('placeId');
    console.log("placeId="+ this.placeId);
  }


  ngOnInit() {
    this.getPlace();
  }



  getPlace(){
    // use async pipe //
    console.log("call  getPlace()");
   
      this.reviews = this.travelService.getReviews( this.placeId,100 );
    // this.travelService.getReviews( this.categoryId,1 ).subscribe(actionArray => {
    //   console.log(actionArray);
    //   this.reviews = actionArray
    // }); 
  }
  goAddReview(){
    console.log("........ go to ADD Review Page")
    this.router.navigateByUrl('/travel-place-review-add/'+this.placeId);

  }
  async openAddReview() {
    const modal = await this.modalController.create({
      component: TravelPlaceReviewAddPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        placeId:this.placeId
      }
    });
    return await modal.present();
  }
}
