import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TikTokAuthCallbackComponent } from './tik-tok/tik-tok-auth-callback/tik-tok-auth-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    TikTokAuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
