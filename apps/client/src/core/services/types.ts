//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  access_token: string;
  expires_at: number;
  expires_in: number;
  provider_refresh_token: string;
  provider_token: string;
  refresh_token: string;
  token_type: string;
  user: { [x in string | number]: any };
}
