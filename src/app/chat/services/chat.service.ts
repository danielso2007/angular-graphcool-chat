import { Injectable, OnDestroy } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { AllChatsQuery, USER_CHATS_QUERY, ChatQuery, CHAT_BY_ID_OR_BY_USERS_QUERY, CREATE_PRIVATE_CHAT_MUTATION, USER_CHATS_SUBSCRIPTION } from './chat.graphql';
import { Chat } from '../models/chat.model';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { Subscription } from 'apollo-client/util/Observable';
import { map } from 'rxjs/operators';
import { DataProxy } from 'apollo-cache';
import { BaseService } from 'src/app/core/services/base.service';
import { User } from '../../core/models/user.model';
import { GET_CHAT_MESSAGES_QUERY, AllMessagesQuery, USER_MESSAGES_SUBSCRIPTION } from './message.graphql';
import { Message } from '../models/message.model';

@Injectable()
export class ChatService extends BaseService implements OnDestroy {

  chats$: Observable<Chat[]>;
  private queryRef: QueryRef<AllChatsQuery>;
  private subscriptions: Subscription[] = [];

  constructor(
    private apollo: Apollo,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { super(); }

  startChatsMonitoring(): void {
    if (!this.chats$) {
      console.log('New startChatsMonitoring...');
      this.chats$ = this.getUserChats();
      this.subscriptions.push(this.chats$.subscribe());
      this.subscriptions.push( // Tratando unsubscribe por meio de eventos do Roteador do Angular
        this.router.events.subscribe((event: RouterEvent) => {
          if (event instanceof NavigationEnd && !this.router.url.includes('chat')) {
            this.stopChatsMonitoring();
            this.userService.stopUsersMonitoring();
          }
        })
      );
    }
  }

  private stopChatsMonitoring(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
    this.chats$ = null;
  }

  getUserChats(): Observable<Chat[]> {
    this.queryRef = this.apollo.watchQuery<AllChatsQuery>({ // Monitorando Query da lista de chats com watchQuery
      query: USER_CHATS_QUERY,
      variables: {
        loggedUserId: this.authService.authUser.id
      },
      fetchPolicy: 'network-only' // Ajustando monitoramento da lista de Chats
    });

    // Atualizando lista de Chats do usuário com Subscription Data
    this.queryRef.subscribeToMore({
      document: USER_CHATS_SUBSCRIPTION,
      variables: { loggedUserId: this.authService.authUser.id },
      updateQuery: (previous: AllChatsQuery, { subscriptionData }): AllChatsQuery => {

        const newChat: Chat = subscriptionData.data['Chat'].node;

        // Atualizando lista de Chats do usuário com Subscription Data
        if (previous.allChats.every(chat => chat.id !== newChat.id)) {
          return {
            ...previous,
            allChats: [newChat, ...previous.allChats]
          };
        }

        return previous;
      }
    });

    this.queryRef.subscribeToMore({ // SubscribeToMore: exibindo última mensagem dos chats em tempo
      document: USER_MESSAGES_SUBSCRIPTION,
      variables: { loggedUserId: this.authService.authUser.id },
      updateQuery: (previous: AllChatsQuery, { subscriptionData }): AllChatsQuery => {

        const newMessage: Message = subscriptionData.data['Message'].node;

        try {

          // Apollo SubscribeToMore: atualizando lista de mensagens recebida
          // Não deixa 2 mensagens ser inseridas no cache.
          if (newMessage.sender.id !== this.authService.authUser.id) {

            // Apollo SubscribeToMore: atualizando lista de mensagens recebida
            const apolloClient = this.apollo.getClient();

            // Apollo SubscribeToMore: atualizando lista de mensagens recebida
            const chatMessagesVariables = { chatId: newMessage.chat.id };

            const chatMessagesData = apolloClient.readQuery<AllMessagesQuery>({
              query: GET_CHAT_MESSAGES_QUERY,
              variables: chatMessagesVariables
            });

            // Apollo SubscribeToMore: atualizando lista de mensagens recebida
            chatMessagesData.allMessages = [...chatMessagesData.allMessages, newMessage];

            // Apollo SubscribeToMore: atualizando lista de mensagens recebida
            apolloClient.writeQuery({
              query: GET_CHAT_MESSAGES_QUERY,
              variables: chatMessagesVariables,
              data: chatMessagesData
            });
          }

        } catch (e) {
          console.log('allMessagesQuery not found!');
        }


        const chatToUpdateIndex: number =
          (previous.allChats)
            ? previous.allChats.findIndex(chat => chat.id === newMessage.chat.id)
            : -1;

            // SubscribeToMore: exibindo última mensagem dos chats em tempo
        if (chatToUpdateIndex > -1) {
          const newAllChats = [...previous.allChats];
          const chatToUpdate: Chat = Object.assign({}, newAllChats[chatToUpdateIndex]);
          chatToUpdate.messages = [newMessage];
          newAllChats[chatToUpdateIndex] = chatToUpdate;
          return {
            ...previous,
            allChats: newAllChats
          };
        }

        return previous;
      }
    });

    return this.queryRef.valueChanges
      .pipe(
        map(res => res.data.allChats),
        map((chats: Chat[]) => {
          const chatsToSort = chats.slice();
          return chatsToSort.sort((a, b) => {
            const valueA = (a.messages.length > 0) ? new Date(a.messages[0].createdAt).getTime() : new Date(a.createdAt).getTime();
            const valueB = (b.messages.length > 0) ? new Date(b.messages[0].createdAt).getTime() : new Date(b.createdAt).getTime();
            return valueB - valueA;
          });
        }),
        map(chats => chats.map(c => {
          const chat = new Chat(c);
          chat.users = chat.users.map(u => new User(u));
          return chat;
        }))
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

        this.readAndWriteQuery<Chat>({
          store,
          newRecord: createChat,
          query: USER_CHATS_QUERY,
          queryName: 'allChats',
          arrayOperation: 'unshift',
          variables: { loggedUserId: this.authService.authUser.id }
        });

        this.readAndWriteQuery<Chat>({
          store,
          newRecord: createChat,
          query: CHAT_BY_ID_OR_BY_USERS_QUERY,
          queryName: 'allChats',
          arrayOperation: 'singleRecord',
          variables: {
            chatId: targetUserId,
            loggedUserId: this.authService.authUser.id,
            targetUserId
          }
        });

      }
    }).pipe(
      map(res => res.data.createChat)
    );
  }

  ngOnDestroy(): void {
    this.stopChatsMonitoring();
  }

}
