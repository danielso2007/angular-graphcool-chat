import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private apiUrl = 'https://api.graph.cool/simple/v1/cjp34sj3p82vz0178reis2tdf';

  constructor(private http: HttpClient) {
    // this.createUser();
    this.allUsers();
  }

  allUsers(): void {
    const body = {
      query: `
        query {
          allUsers {
            id
            name
            email
          }
        }
      `
    };

    this.http.post(this.apiUrl, body).subscribe(res => {
      console.log(res);
    });
  }

  createUser(): void {
    const body = {
      query: `
        mutation CreatenewUser($name: String!, $email: String!, $password: String!) {
          createUser(name: $name, email: $email, password: $password) {
            id
            name
            email
          }
        }
      `,
      variables: {
        name: 'Black Panther',
        email: 'panther@email.com',
        password: '123456'
      }
    };

    this.http.post(this.apiUrl, body).subscribe(res => {
      console.log('Mutations: ', res);
    });
  }
}
