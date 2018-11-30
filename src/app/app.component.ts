import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loading = true;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
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
}
