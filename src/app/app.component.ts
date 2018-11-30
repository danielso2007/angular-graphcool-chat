import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'apollo-client/util/Observable';
import { Subscribable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loading = true;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    // this.createUser().subscribe(res => {
      this.allUser();
    // });
  }

  allUser(): void {
    this.apollo
      .query({
        query: gql`
          {
            allUsers {
              id
              name
              email
            }
          }
        `,
      })
      .subscribe(result => {
        this.loading = result.loading;
        console.log(result);
      });
  }

  createUser(): Subscribable<any> {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
            createUser(name: $name, email: $email, password: $password) {
              id
              name
              email
            }
          }
        `,
        variables: {
          name: 'Iron Man',
          email: 'ironman@email.com',
          password: '123456'
        }
      });
  }
}
