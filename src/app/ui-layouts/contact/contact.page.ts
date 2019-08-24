import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router, NavigationExtras } from '@angular/router';
import { MenuController, ModalController, NavController} from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';

import { UserService } from '../../services/user.service';
import { ShoppingService} from '../../services/shopping.service';
import { ChatService } from './../../services/chat.service';
import { IonicComponentService} from '../../services/ionic-component.service';

import { ShoppingSearchPage } from '../../app-shopping/shopping-search/shopping-search.page';
import { HideHeaderConfig } from '../../shared/hide-header.directive';
// import { TravelSearchPageModule } from '../travel-search/travel-search.module';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
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
  contacts: Observable<any[]>;
  myId: string;

  constructor(
    public menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private modalController: ModalController,
    private ionicComponentService: IonicComponentService,
    public shoppingService: ShoppingService,
    private userService: UserService,
    private chatService: ChatService,
  ) {
    this.cart = this.shoppingService.getCart();
    }


  ngOnInit() {
    this.groups = this.shoppingService.getGroups();
    this.userService.isLoggedIn().then(user => {
      console.log('[Contact] check login', user);
      if (!user) {
        this.router.navigateByUrl('/login');
      }
      this.myId = user.uid;
      this.contacts = this.chatService.getAllContactOfUser(this.myId);
    });
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

  openChat(contact) {
    const navigationExtras: NavigationExtras = {
      state: {
        data: contact.toUser,
        type: contact.toUser.permission
      }
    };
    this.router.navigate(['/chat/' + contact.toUser.id], navigationExtras);
  }
}
