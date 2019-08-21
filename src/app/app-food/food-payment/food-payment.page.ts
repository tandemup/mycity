import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { FoodService } from '../../services/food.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-food-payment',
  templateUrl: './food-payment.page.html',
  styleUrls: ['./food-payment.page.scss'],
})
export class FoodPaymentPage implements OnInit {



  public addressId: string;
  public paymentType:string = "cc";

  constructor( 
    public userService: UserService,
    public foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    //public alertController: AlertController,
  
  )
    { 
    this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');
     //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
     console.log("this addressId="+this.addressId);
    }

  ngOnInit() {

  
  }



  selectPayment(paymentType){
    this.paymentType = paymentType;
  }

  gotoCheckout(){
    console.log("call gotoCheckout");
    console.log("____getaddressId="+this.addressId);
    console.log("____getpaymentType = "+this.paymentType);
    //this.router.navigateByUrl('/food-summary/'+this.addressId);
    let link = ['/food-summary', this.addressId, this.paymentType];
    this.router.navigate(link);
  }
//   gotoPayment() {
//     let link = ['/food-summary', this.addressId, this.paymentType];
//     this.router.navigate(link);
// }
}

