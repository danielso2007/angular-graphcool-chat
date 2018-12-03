import { NgModule, Optional, SkipSelf } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { GraphQLModule } from '../graphql.module';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GraphQLModule
  ]
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }

 }
