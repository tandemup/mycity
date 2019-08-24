import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { ShoppingService } from '../../services/shopping.service';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.page.html',
  styleUrls: ['./shopping-item.page.scss'],
})
export class ShoppingItemPage implements OnInit {

  public categoryId: any;
  public items: Observable<any[]>;

   // ******** for Cart ***********//
   cart = [];

  constructor( 
    public shoppingService: ShoppingService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
  ) {
      this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
      this.cart = this.shoppingService.getCart();
    }

  ngOnInit() {
    this.items = this.shoppingService.getItemByCatId(this.categoryId);
  }

  openTest(categoryId) {
    console.log('openTest' + categoryId);
  }

  openDetail(url, itemId) {
    this.router.navigateByUrl('/' + url + '/' + itemId);
  }
}
