import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { AUTHENTICATE_USER_MUTATION } from './auth.graphql';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apollo: Apollo) {
    // Teste
    this.signinUser({
      email: 'deadpool@email.com',
      password: '123456'
    }).subscribe(res => console.log(res));
  }

  signinUser(variables: {
    email: string;
    password: string;
  }): Observable<{ id: string; token: string }> {
    return this.apollo
      .mutate({
        mutation: AUTHENTICATE_USER_MUTATION,
        variables
      })
      .pipe(
        map(res => res.data.authenticateUser),
        catchError(this.handleError)
      );
  }

  handleError(error: any): Observable<any> {
    console.error('ERRO NA REQUISIÇAO => ', error);
    return throwError(error);
  }
}