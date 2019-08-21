import { Component, OnInit} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ModalController,NavController,LoadingController} from '@ionic/angular';

import { TravelService } from '../../services/travel.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-travel-recommended',
  templateUrl: './travel-recommended.page.html',
  styleUrls: ['./travel-recommended.page.scss'],
})
export class TravelRecommendedPage implements OnInit {

  public recommended: Observable<any>;
         place: any;


  constructor( 
    public travelService: TravelService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private loadingController: LoadingController ,
    private modalController: ModalController) 
    { 
  
    }

  ngOnInit() {
    this.recommended =  this.travelService.getRecommended();
  }
}
