
import { Component, OnInit, ViewChild , ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { FormControl, FormBuilder , FormGroup , Validators } from '@angular/forms';
import { MenuController, IonContent, NavParams, NavController} from '@ionic/angular';
import { Observable } from 'rxjs';

import { Message } from './../../models/message.model';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild('content') private content: any;

  toUser: User;
  toUserId: string;

  user: User;

  doneLoading = false;
  messages: Observable<Message[]>;

  toType: string;

  public messageForm: any;
  chatBox: any;

  constructor(
    public menuCtrl: MenuController,
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private chatService: ChatService,
    private userService: UserService,
    ) {

    this.messageForm = formBuilder.group({
      message: new FormControl('', [Validators.required])
    });
    this.chatBox = '';
    this.route.queryParams.subscribe(params => {
      console.log('[chatroom] param subscribe');
      if (this.router.getCurrentNavigation().extras.state) {
        this.toUser = this.router.getCurrentNavigation().extras.state.data;  console.log('[Chat] get toUser Profile ');
        this.toType = this.router.getCurrentNavigation().extras.state.type;
      } else {
        console.log('[Chat] No extra states');
        this.toUserId = this.route.snapshot.paramMap.get('id');
      }
      this.processInit();
    });

  }

  ngOnInit() {


  }

  processInit() {
    console.log('[Chat] to user id is ', this.toUserId);
    if (this.toUserId !== undefined) {
      this.userService.getUserProfile().subscribe(user => {
        console.log('[Chat] Profile arrived.', user);
        user['id'] = this.userService.getUserId();
        this.user = user as User;
        // this.user.id = this.userService.getUserId();

        this.userService.getUserProfileById(this.toUserId).subscribe(toUser => {
          console.log('[Chat] to user profile arrived', toUser.id);
          this.toUser = toUser as User;
          this.getMessages();
        });
      });

    } else {
      this.userService.getUserProfile().subscribe(user => {
        console.log('[Chat] Profile arrived.', user.id);
        this.user = user as User;
        this.getMessages();
      });
    }
  }


  getMessages() {
    const ids = this.getIdArray();
    this.messages = this.chatService.getAllMessages(ids);
    this.messages.subscribe(messages => {
      this.zone.run(() => {
        this.scrollToBottom();
      });
    });
    this.checkContactAndAdd();
  }

  send(message) {

    if (message && message !== '') {
      // this.messageService.sendMessage(chatId, message);
      const ids = this.getIdArray();
      const messageData = {
        toId: this.toUser.id,
        ids: ids.join('_'),
        fromId: this.user.id,
        category: 'message',
        type: 'text',
        text: message,
        sentAt: new Date(),
        receivedAt: new Date(),
        received: false,
        };
      this.chatService.addMessage(messageData);
    }
    this.chatBox = '';
  }

  checkContactAndAdd() {
    if (this.user.id && this.toUser.id) {
      const idsArr = this.getIdArray();
      this.chatService.getContactByIdStr(idsArr.join('_')).subscribe(contact => {
        console.log('[Chat] get contact --- check', contact);
        if (contact.length === 0) {
          console.log('[Chat] Need to add contact');
          const contactInfo = {
            ids: idsArr,
            ids_str: idsArr.join('_'),
            last_message: '',
            last_time: new Date(),
          };
          console.log('[Chat page] new contact will be added', contactInfo);
          contactInfo['toUser'] = this.toUser; contactInfo['myId'] = this.user.id;  this.chatService.addContact(contactInfo);
          contactInfo['toUser'] = this.user; contactInfo['myId'] = this.toUser.id;  this.chatService.addContact(contactInfo);
        }
      });
    } else {
      console.log('[Chat] Not all user ids are given!');
    }
  }

  getIdArray() {
    const ids = [this.user.id, this.toUser.id]; console.log('[Chat] Original ids are ', ids);
    ids.sort((a, b) => a.toString().localeCompare(b.toString()));
    console.log('[Chat] afater sort is', ids);
    return ids;
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 200);
  }

  toggleSideMenu() {
    this.menuCtrl.toggle(); // Add this method to your button click function
  }

  onProfilePicError(e) {
    console.log('[On Profile Error]', e);
  }
}
