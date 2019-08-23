import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { MenuController, ModalController, NavController} from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';

import { UserService } from '../../services/user.service';
import { ShoppingService} from '../../services/shopping.service';
import { IonicComponentService} from '../../services/ionic-component.service';

import { ShoppingSearchPage } from '../shopping-search/shopping-search.page';
import { HideHeaderConfig } from '../../shared/hide-header.directive';
// import { TravelSearchPageModule } from '../travel-search/travel-search.module';


@Component({
  selector: 'app-shopping-home',
  templateUrl: './shopping-home.page.html',
  styleUrls: ['./shopping-home.page.scss'],
})
export class ShoppingHomePage implements OnInit {
 // ******* HideHeader Config */
 footerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
 headerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-top', maxValue: 45};

  // Slider configuration
  slideOptsOne = {
    initialSlide: 1,
    slidesPerView: 1,
    autoplay: true
  };
  // ******** for Cart ***********//
  cart = [];

  // ********* Observable *********/

  groups: Observable<any[]>;
  categories: Observable<any[]>;
  promotions: Observable<any[]>;
  recommended: Observable<any[]>;
  banners: Observable<any[]>;

  constructor(
    public shoppingService: ShoppingService,
    public menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService,
    private modalController: ModalController
  ) {
    this.cart = this.shoppingService.getCart();
    }


  ngOnInit() {
    this.groups = this.shoppingService.getGroups();
    this.categories = this.shoppingService.getCategories();
    this.promotions = this.shoppingService.getPromotionItems();
    this.recommended = this.shoppingService.getRecommended();
    this.banners = this.shoppingService.getBanners();
  }
  toggleSideMenu() {
    this.menuCtrl.toggle(); // Add this method to your button click function
  }
  async openSearchModal() {
    console.log('openModal');
    const modal = await this.modalController.create({
      component: ShoppingSearchPage,
      componentProps: {
        // categoryId: categoryId
      }
    });
    return await modal.present();
  }
  openDetail(url, itemId) {
    this.router.navigateByUrl('/' + url + '/' + itemId);
  }


}
