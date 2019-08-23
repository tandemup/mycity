
import { Component, OnInit, ViewChild , ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
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

      }
    });
  }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(user => {
      console.log('[Chat] Profile arrived.');
      this.user = user as User;
      this.getMessages();
    });
  }

  getMessages() {
    const ids = this.getIdArray();
    this.messages = this.chatService.getAllMessages(ids);
    this.messages.subscribe(messages => {
      this.zone.run(() => {
        this.scrollToBottom();
      });
    });
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
