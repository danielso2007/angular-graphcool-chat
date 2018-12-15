import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { UserService } from 'src/app/core/services/user.service';
import { AuthGuard } from 'src/app/login/auth.guard';
import { AuthService } from 'src/app/core/services/auth.service';

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
export class ChatTabComponent implements OnInit {

  constructor(
    private chatService: ChatService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
      this.chatService.startChatsMonitoring(); // Monitorando lista de chats do usuário no ChatTabComponent
      this.userService.startUsersMonitoring(this.authService.authUser.id); // Monitorando lista de usuários fora do ChatUsersComponent
  }

}
