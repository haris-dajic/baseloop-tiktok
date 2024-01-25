import { Component } from '@angular/core';
import {TikTokAuthService} from "./core/services/tik-tok-auth/tik-tok-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private tikTokAuth: TikTokAuthService) {
  }

  loginToTikTok(): void {
    const url = this.tikTokAuth.getTikTokAuthorizationUrl();

    window.open(url);
  }
}
