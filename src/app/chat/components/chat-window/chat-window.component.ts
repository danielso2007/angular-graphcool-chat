import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Chat } from '../../models/chat.model';
import { Subscription } from 'apollo-client/util/Observable';
import { map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, OnDestroy {

  chat: Chat;
  recipientId: string = null;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.data
    .pipe(
      map(routerData => this.chat = routerData.chat),
      mergeMap(() => this.router.paramMap),
      tap((params: ParamMap) => {
        if (!this.chat) {
          this.recipientId = params.get('id');
          console.log('User id: ', this.recipientId);
        }
      })
    )
    .subscribe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
