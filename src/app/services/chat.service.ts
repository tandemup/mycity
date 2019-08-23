import { Component, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import { firestore } from 'firebase/app'; // new version : ex arrayContanin, arrayUnion
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  public userId: string;
  public userAuth: boolean;

  // ********* shopping cart array ************* */
  private shoppingCart = [];

  constructor(
    private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {
    this.userId = '';
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        console.log('shoppingService ...  auth = true');
        this.userId = user.uid;
        this.userAuth = true;
      } else {
        console.log('shoppingService ...  auth = false');
        this.userId = '';
        this.userAuth = false;
      }
    });
  }



  getAllMessages(ids) {
    // console.log('_____START getItemByCatId()=' + categoryId);
    const idsStr: String = ids.join('_'); console.log('[Chat service] ID string is ', idsStr);
    return this.firestore.collection<any>('/message', ref => ref
    .where('ids', '==',  idsStr)
    .orderBy('sentAt', 'asc')
    // .limit(limit)
    )
    .snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          // get id from firebase metadata
          const id = a.payload.doc.id;
          // console.log(data);
          return { id, ...data };
        });
      })
    );
  }

  addMessage(message) {
    return  this.firestore.collection<any>('message').add(message);
  }


// *****************************************************//
// ******** User's wishlist item by userId  *********//
// *****************************************************//

getWishlist() {
  console.log('_____START USERID()=' + this.userId);
  // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
  // return this.postDoc.valueChanges()

  return this.firestore.collection<any>('/shopping_favorite_user', ref => ref
  .where('userId', '==', this.userId))
  // .orderBy('timestamp', 'desc').limit(10))
  .snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  );
}

addWishlist(
  itemId: string ,
  itemName: string,
  rating: number,
  image: string
) {
  console.log('addWishlist');
  console.log('userId= ' + this.userId);

  // ###### Add userId to shopping_item > favorite array  #####//
  this.firestore.doc('shopping_item/' + itemId).update(
    {
      favorite: firestore.FieldValue.arrayUnion(this.userId)
    }
  );
  // #### then add placeId to travel_favorite_user collection  ######//
  return this.firestore.doc('shopping_favorite_user/' + itemId).set({
     placeId: itemId,
     userId: this.userId,
     name: itemName,
     rating: rating,
     image: image
  });
// this.postReference.update({
// 	favorite: firestore.FieldValue.arrayUnion(userId)
// })
}


removeWishlist(
placeId: string) {
  console.log('removeWishlist');
  // ####### Remove userId in traval_place > favorite array  ######//
   this.firestore.doc('shopping_item/' + placeId).update(
    {
      favorite: firestore.FieldValue.arrayRemove(this.userId)
    }
  );
  // ###### remove placeId from travel_favorite_user collection  #####//
  return this.firestore.doc('shopping_favorite_user/' + placeId).delete();
}


getRelatedItem(categoryId: string, limit: number) {
  console.log('_____START getItemByCatId()=' + categoryId);
  // this.postDoc = this.afs.doc<Post>(`posts/${categoryId}`)
  // return this.postDoc.valueChanges()

  return this.firestore.collection<any>('/shopping_item', ref => ref
  .where('shopping_categoryId', '==', categoryId)
  .orderBy('name', 'desc').limit(limit))
  .snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  );
}



// *************************************//
// *** Test: Add/set array of object ***//
// ************************************//
testAddArrayObject() {
  // console.log('BEFORE PUSH___________FOODSERVICE addProduct()='+JSON.stringify());
  const docData = {
    stringExample: 'NEEDED',
    booleanExample: true,
    numberExample: 3.14159265,
    // dateExample: this.firebase.firestore.Timestamp.fromDate(new Date('December 10, 1815')),
    tagArray: [{'firstName': 'ME', 'lastName': 'KUU', 'age': 10,
      'addOn': [
        {'isChecked': true, 'name': 'chilli'}]},
        {'firstName': 'John', 'lastName': 'Doe', 'age': 46}], // [5, true, 'hello'],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: 'foo'
        }
    }
    };
    this.firestore.collection('food_order').doc('79oFJZen1UfAoz29pIVL').set(docData).then(function() {
        console.log('Order successfully written!');
    });
}



// *******************//
// ****** Cart  ******//
// *******************//


// ****************************************//
// ******   Review    ******//
// ****************************************//
getReviews(itemId: string, limit: number) {

  console.log('###### get review service itemId=' + itemId);
  return this.firestore.collection<any>('/shopping_review', ref => ref
  // .orderBy('createdtime', 'asc') // You have to create index in firebase console.
  .where('shopping_itemId', '==', itemId)
  .limit(limit))
  .snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        // get id from firebase metadata
        const id = a.payload.doc.id;
        console.log('####Review =' + data);
        return { id, ...data };
      });
    })
  );
}


// ******************************//
// ******   Add review    ******//
// *****************************//
addReview(
  itemId: string,
  userProfileImage: string,
  name: string,
  rating: number,
  comment: string
) {
  console.log('___itemId=' + itemId);
  console.log('_____new Date() = ' + new Date());
  return  this.firestore.collection<any>('shopping_review').add({
      shopping_itemId: itemId,
      userProfileId: this.userId,
      userProfileImage: userProfileImage,
      name: name,
      rating: rating,
      comment: comment,
      createdTime: new Date()
  });

}

// ****************************************//
// ******   Reviews  by placeId  ******//
// ****************************************//
// getReviews(placeId: string) {
//   console.log('###### get review service placeId='+placeId);
//   return this.firestore.collection<any>('/travel_review', ref => ref
//   .where('travel_placeId', '==', placeId))
//   .snapshotChanges().pipe(
//     map(actions => {
//       return actions.map(a => {
//         const data = a.payload.doc.data();
//         // get id from firebase metadata
//         const id = a.payload.doc.id;
//         console.log('####Review ='+data);
//         return { id, ...data };
//       });
//     })
//   );
// }


}
