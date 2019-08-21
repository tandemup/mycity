import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavController} from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { RealestateService } from '../../services/realestate.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { Observable } from 'rxjs';


// import travel-map  for page modal
import { RealMapPage } from '../real-map/real-map.page';


@Component({
  selector: 'app-real-detail',
  templateUrl: './real-detail.page.html',
  styleUrls: ['./real-detail.page.scss'],
})
export class RealDetailPage implements OnInit {

  parentPath:any;

  //****** image slide  *******/
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
  };

  //**** toolbar for hide and show ****/
  showToolbar = false;
  showTitle = false;
  transition:boolean = false;


      //**** favorite  ****/
  favorite: boolean = false;
  favArray: any;
  fav
  heartType: string = "heart-empty";
 

  itemDetail: Observable<any>;
  //relatedPlaces:Observable<any[]>;
  agentDetail: Observable<any>;
  relatedPlacesArray: any=[];
  reviews: Observable<any[]>;

  itemId: any;
  categoryId: any;
  itemArray: any=[]; // <------- itemArray: any=[]; 

  //**** User authentication  ****/
  userAuth: boolean = false; // Is user logged in ?
  userId: any;


  constructor(

      public realestateService: RealestateService,
      public userService: UserService,
      private activatedRoute: ActivatedRoute,
      private navController: NavController,
      public router: Router,
      private ionicComponentService: IonicComponentService,
      private modalController: ModalController
  ) 
  { 
    this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId');

  }
      

  async ngOnInit() {
    await this.getPlaceDetail();
  }
  ngOnDestroy() {
		//this.sub.unsubscribe()
  }


  async getPlaceDetail(){
    //console.log("1___userAuth before receive="+this.userAuth);

    this.userAuth = await this.userService.isLoggedIn();
    //console.log("2___userAuth after receive="+this.userAuth);
    this.userId = await this.userService.getUserId();
   
    //console.log("2.1___userId after receive="+this.userId);

    // use async pipe //


    this.itemDetail =  await this.realestateService.getHouseDetail( this.itemId);

    // get image gallery from place doc.
    await this.itemDetail.subscribe(res => {

      // console.log("4 getPlacesDetail subsribe = "+res);
      // console.log("5 getPlacesDetail subsribe = "+JSON.stringify(res)); 

      this.itemArray = res;
      console.log("______this.itemArray.agentId"+this.itemArray.agentId);
      this.agentDetail =   this.realestateService.getAgentDetail( this.itemArray.agentId);


      console.log("6 this.itemArray/images="+this.itemArray.images);
      console.log("7 this.itemArray.travel_categoryId="+this.itemArray.travel_categoryId);


      //this.getRelatedPlace(this.itemArray.travel_categoryId);



      ///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%... where are this.userID....?????????????????
      this.heartType = res.favorite.includes(this.userId) ? 'heart' : 'heart-empty'
  
      
    });


  }

	toggleHeart() {
		if(this.heartType == 'heart-empty') {
      console.log("Heart ON");
      this.realestateService.addFavorite(
        this.itemId,
        this.itemArray.title, 
        this.itemArray.image_header);

		} else {
      console.log("Heart OFF");
      this.realestateService.removeFavorite(this.itemId);
		}
	}

  onScroll($event: CustomEvent) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.transition = true;
      this.showToolbar = scrollTop >= 150;
     // console.log("showToolbar="+this.showToolbar);
      this.showTitle = scrollTop >= 150;
      //console.log("showTitle="+this.showTitle);
    }else{
      this.transition = false;
    }
  }
  contactAction(action: string){
    this.ionicComponentService.presentToast(action,3000);
  }
  async openMap() {

    console.log("openModal");
    const modal = await this.modalController.create({
      component: RealMapPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        categoryId: "buy"
      }
    });
    return await modal.present();
  }

}
