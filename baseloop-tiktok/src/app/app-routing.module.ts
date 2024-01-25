import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TikTokAuthCallbackComponent} from "./tik-tok/tik-tok-auth-callback/tik-tok-auth-callback.component";

const routes: Routes = [
  {
    path: 'tik-tok-authentication-callback',
    component: TikTokAuthCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
