import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { User } from '../models/user.model';
import { ALL_USERS_QUERY, AllUsersQuery, UserQuery, GET_USER_BY_ID_QUERY } from './user.graphql';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo: Apollo) { }

  allUsers(idToExclude: string): Observable<User[]> {
    return this.apollo
         .query<AllUsersQuery>({
          query: ALL_USERS_QUERY,
          variables: {
            idToExclude
          }
         }).pipe(
          map(res => res.data.allUsers),
          catchError(err => throwError(err))
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

}
