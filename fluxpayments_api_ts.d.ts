// TypeScript declarations for fluxpayments_api_ts React Native bundle
import { FluxTokenBackend } from "./src/types/lib/FluxTokenBackend";
import { ReactNativeSecurityHandle } from "./src/types/ajax/security/ReactNativeSecurityHandle";
import { WebsiteSecurityHandle } from "./src/types/ajax/security/WebsiteSecurityHandle";

export declare module "fluxpayments_api_ts" {
  export const FluxWebsiteAPI: {
    // React Native Functions
    fluxReactNativeSignInAuthorization(
      email: string,
      password: string,
      token?: string
    ): Promise<FluxTokenBackend<ReactNativeSecurityHandle>>;

    fluxReactNativeSessionAuthorization(
      email: string,
      sessionToken: string
    ): Promise<AuthResult>;

    fluxReactNativeResetPassword(
      email: string,
      token: string
    ): Promise<boolean>;

    fluxReactNativeUpdatePassword(
      email: string,
      password: string,
      passwordResetCode: string,
      token: string
    ): Promise<boolean>;

    fluxReactNativeLogout(): Promise<void>;

    fluxReactNativeHasValidSession(): Promise<boolean>;

    // Website Functions (for compatibility)
    fluxWebsiteSignInAuthorization(
      email: string,
      password: string,
      token?: string
    ): Promise<FluxTokenBackend<WebsiteSecurityHandle>>;

    fluxWebsiteCookieAuthorization(): Promise<
      FluxTokenBackend<WebsiteSecurityHandle>
    >;

    fluxWebsite2fa(
      number: string,
      token: string
    ): Promise<FluxTokenBackend<WebsiteSecurityHandle>>;

    resetPassword(email: string, token: string): Promise<boolean>;

    updatePassword(
      email: string,
      password: string,
      passwordResetCode: string,
      token: string
    ): Promise<boolean>;

    // any key
    [key: string]: any;

    fluxWebsiteSignUp(
      email: string,
      password: string,
      token: string,
      additionalInfo: any
    ): Promise<void>;

    getAccountSessionFromOTPL(otpl: string): Promise<any>;

    getMerchantPublicKeyFromOTPL(otpl: string): Promise<any>;

    // React Native specific
    isReactNative: boolean;
  };

  // Export all flux types
  export * from './src/types/flux_types';
  
  // Export ajax types
  export * from './src/ajax';
  
  // Export AuthResult type alias for convenience
  export type AuthResult = FluxTokenBackend<ReactNativeSecurityHandle>;
  
  // Export isReactNative flag
  export const isReactNative: boolean;
  
  
  // Default export
  export default FluxWebsiteAPI;
}