import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { User } from '../models/user.model';
import {
  ALL_USERS_QUERY,
  AllUsersQuery,
  UserQuery,
  GET_USER_BY_ID_QUERY
} from './user.graphql';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Subscription } from 'apollo-client/util/Observable';

@Injectable({providedIn: 'root'})
export class UserService extends BaseService {
  users$: Observable<User[]>;
  private queryRef: QueryRef<AllUsersQuery>;
  private usersSubscription: Subscription;

  constructor(private apollo: Apollo) {
    super();
  }

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
    return this.apollo
      .query<AllUsersQuery>({
        query: ALL_USERS_QUERY,
        variables: {
          idToExclude
        }
      })
      .pipe(
        map(res => res.data.allUsers),
        catchError(err => throwError(err))
      );
  }

  getUserById(id: string): Observable<User> {
    return this.apollo
      .query<UserQuery>({
        query: GET_USER_BY_ID_QUERY,
        variables: { userId: id }
      })
      .pipe(
        map(res => res.data.User),
        map(user => new User(user))
      );
  }
}
