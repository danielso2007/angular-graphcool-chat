import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from '../../models/chat.model';
import { Subscription } from 'apollo-client/util/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, OnDestroy {

  chat: Chat;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.data
    .pipe(
      map(routerData => this.chat = routerData.chat)
    )
    .subscribe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
