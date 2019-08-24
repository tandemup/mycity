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
        console.log('chatService ...  auth = true');
        this.userId = user.uid;
        this.userAuth = true;
      } else {
        console.log('chatService ...  auth = false');
        this.userId = '';
        this.userAuth = false;
      }
    });
  }



  getAllMessages(ids) {
    console.log('_____START getAllMessages()=' , ids);
    const idsStr: String = ids.join('_'); console.log('[Chat service] ID string is ', idsStr);
    return this.firestore.collection<any>('/message', ref => ref
    .where('ids', '==',  idsStr)
    .orderBy('sentAt', 'asc')
    // .limit(limit)
    )
    .snapshotChanges().pipe(
      map(actions => {
        console.log('___[Chat Service] get all messages');
        return actions.map(a => {
          const data = a.payload.doc.data();
          // get id from firebase metadata
          const id = a.payload.doc.id;
          // this.firestore.doc(`message/${id}`).update({
          //   received: true,
          //   receivedAt: new Date()
          // });
          // console.log(data);
          return { id, ...data };
        });
      })
    );
  }

  updateReceivedStatusOfMessages(ids: Array<String>, toId) {
    console.log('[updateReceived Status] fromid is', toId);
    return this.firestore.collection<any>('message', ref   => ref
      .where('ids', '==', ids.join('_'))
      .where('fromId', '==', toId)
    )
    .snapshotChanges().pipe(
      map(actions => {
        console.log('#####[Chat Service] gonna update receive status');
        return actions.map(a => {
          const data = a.payload.doc.data();
          // get id from firebase metadata
          const id = a.payload.doc.id;
          this.firestore.doc(`message/${id}`).update({
            received: true,
            receivedAt: new Date()
          });
          // console.log(data);
          return { id, ...data };
        });
      })
    );
    // .get().forEach((msg) => {
    //   msg.docs.map( m => {
    //     return this.firestore.doc(`message/${m.id}`).update({
    //       received: true,
    //       receivedAt: new Date()
    //     });
    //   });
    // });
  }

  addMessage(message) {
    return  this.firestore.collection<any>('message').add(message);
  }

  getContactByIdStr(contactIdStr, myId) {
    console.log('contact ID string = ' + contactIdStr);
    console.log('getContactById');
    // return   this.firestore.doc<any>('contact' + userId).valueChanges();
    return this.firestore.collection<any>('/contact', ref => ref
    .where('ids_str', '==', contactIdStr)
    .where('myId', '==', myId))
    .snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          console.log('####get a contact=' + data);
          return { id, ...data };
        });
      })
    );
  }

  addContact(contact: any) {
    console.log('[Chat Service] add Contact');
    return  this.firestore.collection<any>('contact').add(contact);
  }

  getAllContactOfUser(myId) {
    console.log('[Chat Service] Get all contacts of user');
    return this.firestore.collection<any>('contact', ref => ref
    .where('myId', '==', myId))
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

  updateOnlineStatusOfContact(myId, status) {
    console.log('[Chat service] ### update online status', myId, status);
    return this.firestore.collection<any>('contact', ref => ref
    .where('ids', 'array-contains', myId)
    )
    .snapshotChanges().pipe(
      map(actions => {
        console.log('#####[Chat Service] gonna update online status');
        return actions.map(a => {
          const data = a.payload.doc.data(); console.log('[Chat service] contact each data', data);
          // get id from firebase metadata
          const id = a.payload.doc.id;  console.log('[chat service] contact id is ', id);
          if (data.myId !== myId) {
            // this.firestore.doc(`contact/${id}`).update({
            //   online: status,
            // });
            this.updateContactStatus(id, status);
          }
          // console.log(data);
          return { id, ...data };
        });
      })
    );
  }

  async updateContactStatus(contactId, status) {
    await this.firestore.doc(`contact/${contactId}`).update({
      online: status,
    });
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

}
