import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-tabs',
  templateUrl: './food-tabs.page.html',
  styleUrls: ['./food-tabs.page.scss'],
})
export class FoodTabsPage implements OnInit {
  
   // ******** for Cart ***********//
   cart = [];

  constructor(      
    public foodService: FoodService) 
  { 
    this.cart = this.foodService.getCart();
  }

  ngOnInit() {
  }

}
