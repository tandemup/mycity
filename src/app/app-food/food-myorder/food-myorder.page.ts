import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { FoodService } from '../../services/food.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-food-myorder',
  templateUrl: './food-myorder.page.html',
  styleUrls: ['./food-myorder.page.scss'],
})
export class FoodMyorderPage implements OnInit {

  public myOrders: Observable<any[]>;
   // ******** for Cart ***********//
   cart = [];

   viewType: any = ""
  constructor( 
    public userService: UserService,
    public foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
  )
    { 
      //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
    console.log(this.router.url,"Current URL");
    this.cart = this.foodService.getCart();
    }

  ngOnInit() {
    //this.getPlace();
    this.myOrders = this.foodService.getMyOrders();
  }


}
