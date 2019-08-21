
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { IonicComponentService} from '../../services/ionic-component.service';

@Component({
  selector: 'app-travel-image-zoom',
  templateUrl: './travel-image-zoom.page.html',
  styleUrls: ['./travel-image-zoom.page.scss'],
})
export class TravelImageZoomPage implements OnInit {
  @ViewChild('slider', { read: ElementRef })slider: ElementRef;
  imgArray: any=[]; 
 
   //this.img = this.navParams.get('img');
   sliderOpts: any;
 
  
   constructor(
     private navParams: NavParams, 
     private modalController: ModalController,
     private ionicComponentService: IonicComponentService
    ) {
       this.ionicComponentService.presentTimeoutLoading(500,true);
       this.imgArray = this.navParams.get('data');
       console.log("get data="+this.imgArray);
       console.log("this.img  = "+JSON.stringify(this.imgArray)); 
       this.sliderOpts = {
         initialSlide:this.navParams.get('index'), // index image
         //effect:	'cube',
         spaceBetween: 10,
         zoom: {
           maxRatio: 5
         }
       };
    }
  
   ngOnInit() {
    
     
   }
  
   zoom(zoomIn: boolean) {
     console.log("call zoom function");
     let zoom = this.slider.nativeElement.swiper.zoom;
     
     if (zoomIn) {
       zoom.in();
     } else {
       zoom.out();
     }
   }
  
   close() {
     this.modalController.dismiss();
   }
 
 
 }
 