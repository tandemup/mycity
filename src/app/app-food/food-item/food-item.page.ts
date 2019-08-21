import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { IonTabs,ModalController,NavController} from '@ionic/angular';

import { FoodService } from '../../services/food.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.page.html',
  styleUrls: ['./food-item.page.scss'],
})
export class FoodItemPage implements OnInit {

  public categoryId: any;
  public items: Observable<any[]>;

    // ******** for Cart ***********//
    cart = [];

  constructor( 
    public foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router
  )
    { 
      this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
      //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
      //console.log(this.router.url,"Current URL");
      this.cart = this.foodService.getCart();
    }

  ngOnInit() {
    //this.getPlace();
    this.items = this.foodService.getItemByCatId(this.categoryId);
  }


}
