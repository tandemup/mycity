import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController} from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { FoodService } from '../../services/food.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-complete',
  templateUrl: './food-complete.page.html',
  styleUrls: ['./food-complete.page.scss'],
})
export class FoodCompletePage implements OnInit {

  constructor(    

    public foodService: FoodService,
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
) {
    this.foodService.removeAllItemCart();
   }

  ngOnInit() {
  }

}
