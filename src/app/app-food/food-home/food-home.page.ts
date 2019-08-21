import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { MenuController,ModalController,NavController} from '@ionic/angular';

import { FoodService} from '../../services/food.service';
import { Observable, Subscription } from 'rxjs';
import { FoodSearchPage } from '../food-search/food-search.page';
import { IonicComponentService} from '../../services/ionic-component.service';
import { HideHeaderConfig } from '../../shared/hide-header.directive';


@Component({
  selector: 'app-food-home',
  templateUrl: './food-home.page.html',
  styleUrls: ['./food-home.page.scss'],
})
export class FoodHomePage implements OnInit {
 // footerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
 footerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
 headerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-top', maxValue: 40};


  // public currentRoute: any;
  // public parentPath: any;
  //public categories: any[];
  public popularArray: any[];
  public topRatingPlaces: any[];
  public favorites: any[];
  public tags: any[]; 

  //********* Observable *********/

  populars: Observable<any[]>;
  categories: Observable<any[]>;
  promotions: Observable<any[]>;

  //******** star rating ********/
  // userId: any;
  // rate = 2;
  // selectStar(i) {
  //     this.rate = i + 1;
  // }

  // ******** for Cart ***********//
  cart = [];
 
  constructor( 
    public menuCtrl: MenuController,
    public foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private modalController: ModalController,
    private ionicComponentService: IonicComponentService
  ) { 

    this.cart = this.foodService.getCart();
    }

  ngOnInit() {
    this.getPopular();
    this.getCategory();
    this.getPromotion();

  }
  toggleSideMenu() {
    this.ionicComponentService.sideMenu();
    //this.menuCtrl.toggle(); //Add this method to your button click function
  }
  getPopular(){
    // this.foodService.getPopularItem().subscribe(actionArray => {
    //   console.log("----->actionArray="+actionArray);
    //   this.popularArray = actionArray
    // });
    //   or Observable with async ////
    this.populars = this.foodService.getPopularItems();
  }
  getCategory(){
    this.categories = this.foodService.getCategories();
  }
  getPromotion(){
    this.promotions = this.foodService.getPromotionItems();
  }

  async openSearchModal() {
    console.log("openModal");
    const modal = await this.modalController.create({
      component: FoodSearchPage,
      componentProps: {
        //categoryId: categoryId
      }
    });
    return await modal.present();
  }
  openDetail(url,itemId){
    this.router.navigateByUrl('/'+url+'/'+itemId);
  }

}
