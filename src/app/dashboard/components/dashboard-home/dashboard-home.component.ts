import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard-home',
  template: `
  <mat-sidenav-container class="sidenav-container">

    <mat-sidenav #sidenav class="sidenav">

      <mat-toolbar color="primary" class="mat-elevation-z2">
        Menu
      </mat-toolbar>

      <app-dashboard-resources
        [isMenu]="true"
        (close)="sidenav.close()">

        <mat-divider></mat-divider>

        <mat-list-item (click)="onLogout(sidenav)">
          <mat-icon matListIcon>exit_to_app</mat-icon>
          <h3 matLine>Logout</h3>
        </mat-list-item>

      </app-dashboard-resources>

    </mat-sidenav>

    <mat-sidenav-content>
      <app-dashboard-header [sidenav]="sidenav"></app-dashboard-header>
      <router-outlet></router-outlet>
    </mat-sidenav-content>

  </mat-sidenav-container>
  `,
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent {

  constructor(
    authService: AuthService
  ) {}

  onLogout(sidenav: MatSidenav): void {
    sidenav.close();
  }

}
