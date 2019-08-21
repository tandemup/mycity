import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { IonTabs,ModalController,NavController} from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { ShoppingService } from '../../services/shopping.service';
import { IonicComponentService } from '../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-my-order-detail',
  templateUrl: './shopping-my-order-detail.page.html',
  styleUrls: ['./shopping-my-order-detail.page.scss'],
})
export class ShoppingMyOrderDetailPage implements OnInit {

  orderId: string;
  public orderDetail: Observable<any>;

  orderItems: any= [];
  orderStatus: string;

  constructor( 
    public userService: UserService,
    public shoppingService: ShoppingService,
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
    this.orderDetail = this.shoppingService.getOrderDetail(this.orderId);
    //********* get order items *********/
    this.shoppingService.getOrderDetail(this.orderId).subscribe(res => {
      console.log("1 res.orderItems"+res.orderItems);
      console.log("res.orderItems"+JSON.parse(res.orderItems));
      this.orderItems = JSON.stringify(res.orderItems);
      this.orderStatus = res.status;
      console.log("orederDetail="+this.orderItems);
      this.ionicComponentService.dismissLoading();
    })
 //********* get shipping address *********/



  }


}

