import { Injectable } from '@angular/core';
import { Observable, throwError, ReplaySubject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import {
  AUTHENTICATE_USER_MUTATION,
  SIGNUP_USER_MUTATION
} from './auth.graphql';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated = new ReplaySubject<boolean>(1);
  redirectUrl: string;

  constructor(private apollo: Apollo) {
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

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
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
        tap(res => this.setAuthState({id: res && res.id, token: res && res.token, isAuthenticated: res !== null})),
        catchError(error => {
          this.setAuthState({id: null, token: null, isAuthenticated: false});
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
        tap(res => this.setAuthState({id: res && res.id, token: res && res.token, isAuthenticated: res !== null})),
        catchError(error => {
          this.setAuthState({id: null, token: null, isAuthenticated: false});
          return throwError(error);
        })
      );
  }

  handleError(error: any): Observable<any> {
    console.error('ERRO NA REQUISIÇAO => ', error);
    return throwError(error);
  }

  // private setAuthUser(userId: string): Observable<User> {
  //   return this.userService.getUserById(userId)
  //     .pipe(
  //       tap((user: User) => this.authUser = user)
  //     );
  // }

  private setAuthState(
    authData: { id: string; token: string; isAuthenticated: boolean }, isRefresh: boolean = false): void {
    // if (authData.isAuthenticated) {
    //   // window.localStorage.setItem(StorageKeys.AUTH_TOKEN, authData.token);
    //   this.setAuthUser(authData.id)
    //     .pipe(
    //       take(1),
    //       tap(() => this._isAuthenticated.next(authData.isAuthenticated))
    //     )
    //     .subscribe();
    //   if (!isRefresh) {
    //     this.apolloConfigModule.closeWebSocketConnection();
    //   }
    //   return;
    // }
    // this._isAuthenticated.next(authData.isAuthenticated);
  }
}
