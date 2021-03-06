import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChatTabComponent } from './components/chat-tab/chat-tab.component';
import { ChatUsersComponent } from './components/chat-users/chat-users.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatService } from './services/chat.service';
import { ChatWindowResolver } from './components/chat-window/chat-window-resolver';
import { MessageService } from './services/message.service';
import { FormsModule } from '@angular/forms';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatAddGroupComponent } from './components/chat-add-group/chat-add-group.component';

@NgModule({
  declarations: [ChatTabComponent, ChatAddGroupComponent, ChatUsersComponent, ChatListComponent, ChatWindowComponent, ChatMessageComponent],
  imports: [
    SharedModule,
    FormsModule,
    ChatRoutingModule
  ],
  providers: [
    ChatService,
    MessageService,
    ChatWindowResolver
  ],
  entryComponents: [
    ChatAddGroupComponent
  ]
})
export class ChatModule { }
