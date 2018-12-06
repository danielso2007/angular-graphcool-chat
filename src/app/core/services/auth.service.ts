import { Injectable } from '@angular/core';
import { Observable, throwError, ReplaySubject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import {
  AUTHENTICATE_USER_MUTATION,
  SIGNUP_USER_MUTATION
} from './auth.graphql';
import { catchError, map, tap, mergeMap } from 'rxjs/operators';

import { StorageKeys } from '../../storage-keys';
import { Base64 } from 'js-base64';
import { LoggedInUserQuery, LOGGED_IN_USER_QUERY } from './auth.graphql';
import { of } from 'zen-observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = new ReplaySubject<boolean>(1);
  redirectUrl: string;
  keepSigned: boolean;
  rememberMe: boolean;

  constructor(private apollo: Apollo) {
    this.init();
    // Teste
    // this.signinUser({
    //   email: 'deadpool@email.com',
    //   password: '123456'
    // }).subscribe(res => console.log(res));
    // this.signupUser({
    //   name: 'Doctor Strange',
    //   email: 'strange@email.com',
    //   password: '123456'
    // }).subscribe(res => console.log(res));
  }

  init(): void {
    this.keepSigned = JSON.parse(window.localStorage.getItem(StorageKeys.KEEP_SIGNED));
    this.rememberMe = JSON.parse(window.localStorage.getItem(StorageKeys.REMEMBER_ME));
  }

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  toggleKeepSigned(): void {
    this.keepSigned = !this.keepSigned;
    console.log('keepSigned', this.keepSigned);
    window.localStorage.setItem( StorageKeys.KEEP_SIGNED, this.keepSigned.toString());
  }

  toggleRememberMe(): void {
    this.rememberMe = !this.rememberMe;
    console.log('rememberMe', this.rememberMe);
    window.localStorage.setItem(StorageKeys.REMEMBER_ME, this.rememberMe.toString());
    if (!this.rememberMe) {
      window.localStorage.removeItem(StorageKeys.USER_EMAIL);
      window.localStorage.removeItem(StorageKeys.USER_PASSWORD);
    }
  }

  setRememberMe(user: { email: string; password: string }): void {
    if (this.rememberMe) {
      window.localStorage.setItem(StorageKeys.USER_EMAIL, Base64.encode(user.email));
      window.localStorage.setItem(StorageKeys.USER_PASSWORD, Base64.encode(user.password));
    }
  }

  getRememberMe(): { email: string; password: string } {
    if (!this.rememberMe) {
      return null;
    }
    return {
      email: Base64.decode(window.localStorage.getItem(StorageKeys.USER_EMAIL)),
      password: Base64.decode(window.localStorage.getItem(StorageKeys.USER_PASSWORD))
    };
  }

  signinUser(variables: {
    email: string;
    password: string;
  }): Observable<{ id: string; token: string; __typename: string }> {
    return this.apollo
      .mutate({
        mutation: AUTHENTICATE_USER_MUTATION,
        variables
      })
      .pipe(
        map(res => res.data.authenticateUser),
        tap(res =>
          this.setAuthState({
            id: res && res.id,
            token: res && res.token,
            isAuthenticated: res !== null
          })
        ),
        catchError(error => {
          this.setAuthState({ id: null, token: null, isAuthenticated: false });
          return throwError(error);
        })
      );
  }

  signupUser(variables: {
    name: String;
    email: string;
    password: string;
  }): Observable<{ id: string; token: string; __typename: string }> {
    return this.apollo
      .mutate({
        mutation: SIGNUP_USER_MUTATION,
        variables
      })
      .pipe(
        map(res => res.data.signupUser),
        tap(res =>
          this.setAuthState({
            id: res && res.id,
            token: res && res.token,
            isAuthenticated: res !== null
          })
        ),
        catchError(error => {
          this.setAuthState({ id: null, token: null, isAuthenticated: false });
          return throwError(error);
        })
      );
  }

  handleError(error: any): Observable<any> {
    console.error('ERRO NA REQUISIÇAO => ', error);
    return throwError(error);
  }

  private validateToken(): Observable<{id: string, isAuthenticated: boolean}> {
    return this.apollo.query<LoggedInUserQuery>({query: LOGGED_IN_USER_QUERY, fetchPolicy: 'network-only'})
    .pipe(
      map(res => {
        const user = res.data.loggedInUser;
        return {
          id: user && user.id,
          isAuthenticated: user !== null
        };
      }),
      mergeMap(authData => (authData.isAuthenticated) ? of(authData) : throwError(new Error('Invalid token!')))
    );
  }

  // private setAuthUser(userId: string): Observable<User> {
  //   return this.userService.getUserById(userId)
  //     .pipe(
  //       tap((user: User) => this.authUser = user)
  //     );
  // }

  private setAuthState(
    authData: { id: string; token: string; isAuthenticated: boolean },
    isRefresh: boolean = false
  ): void {
    if (authData.isAuthenticated) {
      window.localStorage.setItem(StorageKeys.AUTH_TOKEN, authData.token);
      // this.setAuthUser(authData.id)
      //   .pipe(
      //     take(1),
      //     tap(() => this._isAuthenticated.next(authData.isAuthenticated))
      //   )
      //   .subscribe();
      // if (!isRefresh) {
      //   this.apolloConfigModule.closeWebSocketConnection();
      // }
      return;
    }
    this._isAuthenticated.next(authData.isAuthenticated);
  }
}
