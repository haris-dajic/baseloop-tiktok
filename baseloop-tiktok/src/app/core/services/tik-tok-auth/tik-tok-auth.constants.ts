export const TIKTOK_CLIENT_ID = '7327747702484584454';
export const TIKTOK_REDIRECT_URI =
  'https://redirectmeto.com/http://localhost:4200/tik-tok/authentication-callback';

export const TIKTOK_OAUTH_URL = 'https://www.tiktok.com/v2/auth/authorize/';
export const TIKTOK_SCOPES =
  'user.info.basic,video.upload';
export const SEARCH_PARAMS = {
  CLIENT_ID: 'client_id',
  REDIRECT_URI: 'redirect_uri',
  RESPONSE_TYPE: 'response_type',
  CODE_CHALLENGE: 'code_challenge',
  CODE_CHALLENGE_METHOD: 'code_challenge_method'
};
export const SESSION_STORAGE_KEYS = {
  CODE_VERIFIER: 'tik_tok_code_verifier',
  STATE: 'tik_tok_state'
};
