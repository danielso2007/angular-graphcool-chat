import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Title } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-dashboard-header',
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z2">
      <mat-toolbar-row>

        <button mat-icon-button (click)="sidenav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>

        <h1>{{ title.getTitle() }}</h1>

        <span class="spacer"></span>

        <button mat-icon-button (click)="onLogout()">
          <mat-icon>exit_to_app</mat-icon>
        </button>

      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {

  @Input() sidenav: MatSidenav;

  constructor(
    private authService: AuthService,
    public title: Title
  ) {}

  onLogout(): void {
    this.authService.logout();
  }

}
