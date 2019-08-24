import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { ShoppingService } from '../../services/shopping.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-my-order',
  templateUrl: './shopping-my-order.page.html',
  styleUrls: ['./shopping-my-order.page.scss'],
})
export class ShoppingMyOrderPage implements OnInit {

  public myOrders: Observable<any[]>;
   // ******** for Cart ***********//
   cart = [];


  constructor(
    public userService: UserService,
    public shoppingService: ShoppingService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,

  ) {
    // this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    // console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
    console.log(this.router.url,'Current URL');
    this.cart = this.shoppingService.getCart();
    }

  ngOnInit() {
    // this.getPlace();
    this.myOrders = this.shoppingService.getMyOrders();
  }


}
