import { Title } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Chat } from '../../models/chat.model';
import { Subscription } from 'apollo-client/util/Observable';
import { map, mergeMap, tap, take } from 'rxjs/operators';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';
import { AuthService } from '../../../core/services/auth.service';
import { ChatService } from '../../services/chat.service';
import { MessageService } from '../../services/message.service';
import { Observable, of } from 'rxjs';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, OnDestroy {

  chat: Chat;
  messages$: Observable<Message[]>;
  recipientId: string = null;
  private subscriptions: Subscription[] = [];

  constructor(
    public authService: AuthService,
    private chatService: ChatService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private title: Title,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.title.setTitle('Loading...');
    this.subscriptions.push(
      this.route.data
      .pipe(
        map(routerData => this.chat = routerData.chat),
        mergeMap(() => this.route.paramMap),
        tap((params: ParamMap) => {
          if (!this.chat) {
            this.recipientId = params.get('id');
            console.log('User id: ', this.recipientId);
            this.userService.getUserById(this.recipientId)
            .pipe(take(1)).subscribe((user: User) => this.title.setTitle(user.name));
            this.messages$ = of([]);
          } else {
            this.title.setTitle(this.chat.title || this.chat.users[0].name);
            this.messages$ = this.messageService.getChatMessages(this.chat.id);
          }
        })
      )
      .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.title.setTitle('Angular Graphcool Chat');
  }

}
