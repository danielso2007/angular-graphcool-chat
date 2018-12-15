import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat.model';
import { BaseComponent } from '../../../shared/components/base.component';
import { AuthService } from '../../../core/services/auth.service';
import { ChatAddGroupComponent } from '../chat-add-group/chat-add-group.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent extends BaseComponent<Chat> implements OnInit {

  chats$: Observable<Chat[]>;

  constructor(
    private chatService: ChatService,
    protected authService: AuthService,
    protected dialog: MatDialog
  ) { super(); }

  ngOnInit() {
    this.chats$ = this.chatService.chats$;
  }

  getChatTitle(chat: Chat): string {
    return chat.title || chat.users[0].name;
  }

  getLastMessage(chat: Chat): string {
    const message = chat.messages[0];
    if (message) {
      const sender = (message.sender.id === this.authService.authUser.id) ? 'You' : message.sender.name;
      return `${sender}: ${message.text}`;
    }

    return 'No messages.';
  }

  onAddGroup(): void {
    this.dialog.open(ChatAddGroupComponent, { width: '500px', maxHeight: '95vh' });
  }
}
