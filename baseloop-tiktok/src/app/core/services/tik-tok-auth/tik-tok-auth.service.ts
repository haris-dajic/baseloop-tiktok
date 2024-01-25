import {Injectable} from "@angular/core";
import * as tikTokConstants from "./tik-tok-auth.constants"
import {OAuthExtensionService} from "../oauth-extension.service";

@Injectable({ providedIn: 'root'})
export class TikTokAuthService{
  private clientId = tikTokConstants.TIKTOK_CLIENT_ID;
  private redirectUri = tikTokConstants.TIKTOK_REDIRECT_URI;

  constructor(private oauthExtension: OAuthExtensionService) {
  }

  public getTikTokAuthorizationUrl(): string {
    try {
      const verifier = this.oauthExtension.generateRandomCodeVerifier();
      const challenge = this.oauthExtension.createCodeChallengeFromCodeVerifier(verifier);
      const state = this.oauthExtension.generateRandomState();

      sessionStorage.setItem(tikTokConstants.SESSION_STORAGE_KEYS.CODE_VERIFIER, verifier);
      sessionStorage.setItem(tikTokConstants.SESSION_STORAGE_KEYS.STATE, state);

      return this.generateTikTokAuthUrl(challenge, state);
    } catch (error) {
      console.error('An error occurred during TikTok authorization:', error);
      return "error";
      // Additional error handling logic, e.g., displaying a user-friendly error message
    }
  }

  private generateTikTokAuthUrl(challenge: string, state: string): string {
    const authUrl =
      `${tikTokConstants.TIKTOK_OAUTH_URL}` +
      `?client_key=${this.clientId}&` +
      `redirect_uri=${encodeURIComponent(this.redirectUri)}&` +
      `response_type=code&` +
      `scope=${encodeURIComponent(tikTokConstants.TIKTOK_SCOPES)}&` +
      `code_challenge=${challenge}&` +
      `code_challenge_method=S256&` +
      `state=${state}`;

    return authUrl;
  }

}
