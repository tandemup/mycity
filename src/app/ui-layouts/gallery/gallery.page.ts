import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController,NavController, LoadingController, ToastController} from '@ionic/angular';
import { AngularFirestore} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

//*********** Import  gallery viewer modal **************//
import { GalleryViewerModalPage } from '../gallery-viewer-modal/gallery-viewer-modal.page';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  public images: Observable<any[]>;
  public imagesArray: any=[];
   //*********** View mode  **************/
   galleryView: string = "two";


  constructor(
    private firestore: AngularFirestore,
    public menuCtrl: MenuController,
    private loadingController: LoadingController ,
    private modalController: ModalController,
    public loadingPopup: LoadingController
  ) {

  }

  ngOnInit() {
    this.images = this.firestore.collection<any>('layout_gallery').valueChanges();
    this.images.subscribe(res => {
      this.imagesArray = res;
      console.log("imageArray="+JSON.stringify(this.imagesArray));
      setTimeout(() => {
       // loadingPopup.dismiss();
      }, 1000);
  })
  }

  toggleSideMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
  openImageViewer(image) {
    console.log("openImageViewer")
    // let modal = this.modalCtrl.create(CartPage, { data: this.cart });
   this.modalController.create({
     component: GalleryViewerModalPage,
     componentProps: {
       data: this.imagesArray,
       index: image
     }
   }).then(modal => {
     modal.present();
   });
 }
}
