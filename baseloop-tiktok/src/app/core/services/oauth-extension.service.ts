import {Injectable} from "@angular/core";
import { sha256 } from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class OAuthExtensionService {
  public generateRandomState(length: number = 40): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let state = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      state += charset.charAt(randomIndex);
    }
    return state;
  }

  public generateRandomCodeVerifier(): string {
    const randomValues = new Uint32Array(40);
    window.crypto.getRandomValues(randomValues);
    return Array.from(randomValues, (value) => ('0' + value.toString(16)).slice(-2)).join('');
  }

  public createCodeChallengeFromCodeVerifier(verifierCode: string): string {
    const hash = sha256.arrayBuffer(verifierCode);
    const base64EncodedValue = this.base64UrlEncode(new Uint8Array(hash));
    return base64EncodedValue;
  }

  base64UrlEncode(input: Uint8Array): string {
    let base64 = btoa(String.fromCharCode.apply(null, [...input]));
    base64 = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    return base64;
  }
}
