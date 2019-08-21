import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { ShoppingService } from '../../services/shopping.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-shopping-payment',
  templateUrl: './shopping-payment.page.html',
  styleUrls: ['./shopping-payment.page.scss'],
})
export class ShoppingPaymentPage implements OnInit {


  public addressId: string;
  public paymentType:string = "cc";

  constructor( 
    public userService: UserService,
    public shoppingService: ShoppingService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    //public alertController: AlertController,

  )
    { 
      //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    this.addressId = this.activatedRoute.snapshot.paramMap.get('addressId');
    console.log("this addressId="+this.addressId);
     //this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    }

  ngOnInit() {
   
  
  }



  selectPayment(paymentType){
    this.paymentType = paymentType;
  }

  gotoCheckout(){
    //this.router.navigateByUrl('/shopping-summary/'+this.addressId);
    console.log("call gotoCheckout");
    console.log("____getaddressId="+this.addressId);
    console.log("____getpaymentType = "+this.paymentType);
    let link = ['/shopping-summary', this.addressId, this.paymentType];
    this.router.navigate(link);
  }
//   gotoPayment() {
//     console.log("call gotoPAyment");
//     let link = ['/shopping-summary', this.addressId, this.paymentType];
//     this.router.navigate(link);
// }
}

