import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Chat } from '../../models/chat.model';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatWindowResolver implements Resolve<Chat> {

  constructor(
    private chatService: ChatService
  ) {}

  resolve(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Chat> {
    const chatOrUserId: string = router.paramMap.get('id');
    return this.chatService.getChatByIdOrUsers(chatOrUserId);
  }

}
