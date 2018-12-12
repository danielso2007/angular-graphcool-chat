import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { User } from '../models/user.model';
import { ALL_USERS_QUERY, AllUserQuery } from './user.graphql';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo: Apollo) { }

  allUsers(): Observable<User[]> {
    return this.apollo
         .query<AllUserQuery>({
          query: ALL_USERS_QUERY
         }).pipe(
          map(res => res.data.allUsers),
          catchError(err => throwError(err))
         );
  }

}
