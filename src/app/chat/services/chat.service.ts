import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { AllChatsQuery, USER_CHATS_QUERY, ChatQuery, CHAT_BY_ID_OR_BY_USERS_QUERY, CREATE_PRIVATE_CHAT_MUTATION } from './chat.graphql';
import { Chat } from '../models/chat.model';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { Subscription } from 'apollo-client/util/Observable';
import { map } from 'rxjs/operators';
import { DataProxy } from 'apollo-cache';

@Injectable()
export class ChatService {

  chats$: Observable<Chat[]>;
  private queryRef: QueryRef<AllChatsQuery>;
  private subscriptions: Subscription[] = [];

  constructor(
    private apollo: Apollo,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  getUserChats(): Observable<Chat[]> {
    return this.apollo.query<AllChatsQuery>({
      query: USER_CHATS_QUERY,
      variables: {
        loggedUserId: this.authService.authUser ? this.authService.authUser.id : ''
      }
    }).pipe(
      map(res => res.data.allChats)
    );
  }

  getChatByIdOrUsers(chatOrUserId: string): Observable<Chat> {
    return this.apollo.query<ChatQuery | AllChatsQuery>({
      query: CHAT_BY_ID_OR_BY_USERS_QUERY,
      variables: {
        chatId: chatOrUserId,
        loggedUserId: this.authService.authUser ? this.authService.authUser.id : '',
        targetUserId: chatOrUserId
      }
    }).pipe(
      map(res => {
        const chat: Chat = (res.data['Chat']) ? res.data['Chat'] : res.data['allChats'][0];
        return chat;
      })
    );
  }

  createPrivateChat(targetUserId: string): Observable<Chat> {
    return this.apollo.mutate({
      mutation: CREATE_PRIVATE_CHAT_MUTATION,
      variables: {
        loggedUserId: this.authService.authUser.id,
        targetUserId
      },
      update: (store: DataProxy, { data: { createChat } }) => {

        // this.readAndWriteQuery<Chat>({
        //   store,
        //   newRecord: createChat,
        //   query: USER_CHATS_QUERY,
        //   queryName: 'allChats',
        //   arrayOperation: 'unshift',
        //   variables: { loggedUserId: this.authService.authUser.id }
        // });

        // this.readAndWriteQuery<Chat>({
        //   store,
        //   newRecord: createChat,
        //   query: CHAT_BY_ID_OR_BY_USERS_QUERY,
        //   queryName: 'allChats',
        //   arrayOperation: 'singleRecord',
        //   variables: {
        //     chatId: targetUserId,
        //     loggedUserId: this.authService.authUser.id,
        //     targetUserId
        //   }
        // });

      }
    }).pipe(
      map(res => res.data.createChat)
    );
  }
}
