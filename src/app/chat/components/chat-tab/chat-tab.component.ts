import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-tab',
  template: `
    <nav mat-tab-nav-bar backgroundColor="primary">
      <a mat-tab-link routerLink="./" routerLinkActive #chatRla="routerLinkActive" [active]="chatRla.isActive" [routerLinkActiveOptions]="{exact: true}">Chats</a>
      <a mat-tab-link routerLink="users" routerLinkActive #userRla="routerLinkActive" [active]="userRla.isActive">Users</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class ChatTabComponent {

}
