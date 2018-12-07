import { ApolloConfigModule } from './../apollo-config.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { Title } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    Title
  ],
  exports: [
    BrowserAnimationsModule,
    ApolloConfigModule
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
