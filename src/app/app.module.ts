import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// ******** Angularfire ********/
import { AngularFireModule } from '@angular/fire';

// ******* firebase api key ********//
import { environment } from '../environments/environment';

// ******* firebase api key ********//
import { AngularFireAuthModule } from '@angular/fire/auth';

// ******* firebase firestore ********//
import { AngularFirestoreModule } from '@angular/fire/firestore';

// ******* firebase storage ********//
import { AngularFireStorageModule } from '@angular/fire/storage';


// import image gallery page module
// import { ImageModalPageModule } from './image-modal/image-modal.module';


// ******* Shopping page module ********//
import { ShoppingSearchPageModule } from './app-shopping/shopping-search/shopping-search.module'

// ******* UI-layout / gallery viewer ********//
import { GalleryViewerModalPageModule } from './ui-layouts/gallery-viewer-modal/gallery-viewer-modal.module';


// ******** UI_components / modal detail *********/
// import { ModalDetailPageModule } from './ui-components/modal-detail/modal-detail.module';


// ******** ionic4 rating *********/
import { IonicRatingModule } from 'ionic4-rating/dist';


// ******** Shared module *********/
import { SharedModule} from './shared/shared.module';



@NgModule({
  declarations: [AppComponent ], // Autosize
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicRatingModule, // Put ionic-rating module here
    SharedModule,
    IonicModule.forRoot({
      rippleEffect: true,
      mode: 'ios'
    }),
    AppRoutingModule,

    // ******* Shopping page module ********//
    ShoppingSearchPageModule,
   // ShoppingImageGalleryPageModule,

    // ******* UI-components / modal ********//
    // ModalDetailPageModule,

    // ******* UI-layout / gallery ********//
    GalleryViewerModalPageModule,

    FormsModule,
    ReactiveFormsModule ,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
