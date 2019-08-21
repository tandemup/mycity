import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { IonTabs,ModalController,NavController} from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { FoodService } from '../../services/food.service';
import { IonicComponentService } from '../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-food-myorder-detail',
  templateUrl: './food-myorder-detail.page.html',
  styleUrls: ['./food-myorder-detail.page.scss'],
})
  export class FoodMyorderDetailPage implements OnInit {
  orderId: string;
  public orderDetail: Observable<any>;

  orderItems: any= [];
  orderStatus: string;

  constructor( 
    public userService: UserService,
    public foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService
  )
    { 
     this.orderId = this.activatedRoute.snapshot.paramMap.get('orderId');
    console.log("Get activatedRoute orderId="+ this.activatedRoute.snapshot.paramMap.get('orderId'));
    console.log(this.router.url,"Current URL");
    //this.cart = this.foodService.getCart();
    }

  ngOnInit() {

    this.ionicComponentService.presentLoading();
    this.orderDetail = this.foodService.getOrderDetail(this.orderId);

    this.foodService.getOrderDetail(this.orderId).subscribe(res => {
      this.orderItems = JSON.parse(res.orderItems);
      this.orderStatus = res.status;
      console.log("orederDetail="+this.orderItems);
      this.ionicComponentService.dismissLoading();
    })


  }


}

