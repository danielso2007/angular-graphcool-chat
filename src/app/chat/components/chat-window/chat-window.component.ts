import { Title } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
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
import { BaseComponent } from '../../../shared/components/base.component';
import { ChatMessageComponent } from '../chat-message/chat-message.component';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent extends BaseComponent<Chat> implements OnInit, OnDestroy, AfterViewInit {

  chat: Chat;
  messages$: Observable<Message[]>;
  recipientId: string = null;
  newMessage = '';
  alreadyLoadedMessages = false;
  private subscriptions: Subscription[] = [];

  @ViewChild('content') private content: ElementRef;
  @ViewChildren(ChatMessageComponent) private messagesQueryList: QueryList<ChatMessageComponent>;

  constructor(
    protected authService: AuthService,
    private chatService: ChatService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private title: Title,
    private userService: UserService
  ) { super(); }

  ngOnInit() {
    // Tratanto multiplos "subscribes" do ChatTab e nova chamada no C
    this.chatService.startChatsMonitoring();
    this.userService.startUsersMonitoring(this.authService.authUser.id);
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
            this.lerMensagens();
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

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.messagesQueryList.changes.subscribe(() => {
        this.scrollToBottom('smooth');
      })
    );
  }

  private lerMensagens(): void {
      this.messages$ = this.messageService.getChatMessages(this.chat.id);
      this.alreadyLoadedMessages = true;
  }

  sendMessage(): void {
    this.newMessage = this.newMessage.trim();
    if (this.newMessage) {

      if (this.chat) {

        this.createMessage()
          .pipe(take(1)).subscribe();

        this.newMessage = '';

      } else {
        this.createPrivateChat();
      }

    }
  }

  private createPrivateChat(): void {
    this.chatService.createPrivateChat(this.recipientId)
      .pipe(
        take(1),
        tap((chat: Chat) => {
          this.chat = chat;
          this.sendMessage();
        })
      ).subscribe();
  }

  private createMessage(): Observable<Message> {
    return this.messageService.createMessage({
      text: this.newMessage,
      chatId: this.chat.id,
      senderId: this.authService.authUser.id
    }).pipe(
      tap(message => {
        if (!this.alreadyLoadedMessages) {
          this.lerMensagens();
        }
      })
    );
  }

  private scrollToBottom(behavior: string = 'auto', block: string = 'end'): void {
    setTimeout(() => {
      this.content.nativeElement.scrollIntoView({ behavior, block });
    }, 0);
  }

}
