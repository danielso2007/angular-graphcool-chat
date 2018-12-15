import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { User } from '../models/user.model';
import {
  ALL_USERS_QUERY,
  AllUsersQuery,
  UserQuery,
  GET_USER_BY_ID_QUERY,
  USERS_SUBSCRIPTION,
  UPDATE_USER_MUTATION,
  getUpdateUserPhotoMutation
} from './user.graphql';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Subscription } from 'apollo-client/util/Observable';
import { FileService } from './file.service';
import { FileModel } from '../models/file.model';

@Injectable({providedIn: 'root'})
export class UserService extends BaseService {
  users$: Observable<User[]>;
  private queryRef: QueryRef<AllUsersQuery>;
  private usersSubscription: Subscription;

  constructor(
    private apollo: Apollo,
    private fileService: FileService
  ) { super(); }

  startUsersMonitoring(idToExclude: string): void {
    if (!this.users$) {
      this.users$ = this.allUsers(idToExclude);
      this.usersSubscription = this.users$.subscribe();
    }
  }

  stopUsersMonitoring(): void {
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
      this.usersSubscription = null;
      this.users$ = null;
    }
  }

  allUsers(idToExclude: string): Observable<User[]> {
    this.queryRef = this.apollo
      .watchQuery<AllUsersQuery>({
        query: ALL_USERS_QUERY,
        variables: {
          idToExclude
        },
        fetchPolicy: 'network-only' // Monitorando lista de usuários fora do ChatUsersComponent
      });

      // Atualizando lista de Usuários em tempo real com subscriptions
    this.queryRef.subscribeToMore({
      document: USERS_SUBSCRIPTION,
      updateQuery: (previous: AllUsersQuery, { subscriptionData }): AllUsersQuery => {

        const subscriptionUser: User = subscriptionData.data['User'].node;
        const newAllUsers: User[] = [ ...previous.allUsers ];

        switch (subscriptionData.data['User'].mutation) {
          case 'CREATED':
            newAllUsers.unshift(subscriptionUser);
            break;
          case 'UPDATED':
            const userToUpdateIndex: number = newAllUsers.findIndex(u => u.id === subscriptionUser.id);
            if (userToUpdateIndex > -1) {
              newAllUsers[userToUpdateIndex] = subscriptionUser;
            }
        }

        return {
          ...previous,
          allUsers: newAllUsers.sort((uA, uB) => {
            if (uA.name < uB.name) { return -1; }
            if (uA.name > uB.name) { return 1; }
            return 0;
          })
        };
      }
    });

    return this.queryRef.valueChanges
      .pipe(
        map(res => res.data.allUsers),
        map(users => users.map(user => new User(user)))
      );
  }

  getUserById(id: string): Observable<User> {
    return this.apollo
      .query<UserQuery>({
        query: GET_USER_BY_ID_QUERY,
        variables: { userId: id }
      }).pipe(
        map(res => res.data.User),
        map(user => new User(user))
      );
  }

  updateUser(user: User): Observable<User> {
    return this.apollo.mutate({
      mutation: UPDATE_USER_MUTATION,
      variables: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    }).pipe(
      map(res => res.data.updateUser)
    );
  }

  updateUserPhoto(file: File, user: User): Observable<User> {
    return this.fileService.upload(file)
      .pipe(
        mergeMap((newPhoto: FileModel) => {
          return this.apollo.mutate({
            mutation: getUpdateUserPhotoMutation(!!user.photo),
            variables: {
              loggedUserId: user.id,
              newPhotoId: newPhoto.id,
              oldPhotoId: (user.photo) ? user.photo.id : null
            }
          }).pipe(
            map(res => res.data.updateUser)
          );
        })
      );
  }
}
