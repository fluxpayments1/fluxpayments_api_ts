import { MerchantEndpointsSecurityHandle } from "../ajax/security/MerchantEndpointsSecurityHandle";
import { FluxComms } from "./Flux";
import { FluxSocketImpl } from "./FluxSockets";
import { GeneralSecurityHandle } from "../ajax/security/GeneralSecurityHandle";
import { AccountDataSecurityHandle } from "../ajax/security/AccountDataSecurityHandle";
/**
 * Initializes a connection to the flux websocket.
 *
 *
 * @param publicKey
 * @param privateKey
 * @param username
 * @param passphrase
 * @returns
 */
export declare function fluxSocket(publicKey: string, privateKey: string, username: string, passphrase: string): Promise<FluxSocketImpl>;
/**
 * Resolves a Flux object that can be used to interact with the Flux API
 *
 * @param publicKey Public key displayed in the Flux dashboard
 * @param privateKey Private key displayed in the Flux dashboard
 * @param username Username displayed in the Flux dashboard
 * @param passphrase Passphrase displayed in the Flux dashboard
 * @returns A Promise resolving to a Flux object that can be used to interact with the Flux API
 */
export declare function flux(publicKey: string, privateKey: string, username: string, passphrase: string): Promise<FluxComms<MerchantEndpointsSecurityHandle>>;
export declare function fluxBrowser(publicKey?: string): Promise<FluxComms<GeneralSecurityHandle>>;
export declare function fluxGetter(): FluxComms<import("../ajax/security/SecurityHandler").SecurityHandler>;
export declare function fluxSocketBrowserSessionBased(secHandle: AccountDataSecurityHandle): Promise<FluxSocketImpl>;
import { WebsiteSecurityHandle } from "../ajax/security/WebsiteSecurityHandle";
import { ReactNativeSecurityHandle } from "../ajax/security/ReactNativeSecurityHandle";
import { FluxTokenBackend } from "./FluxTokenBackend";
import { CreateSessionResponse } from "../ajax/Responses/CreateSessionResponse";
import { UserSecurityHandle } from "../../src/ajax/security/UserSecurityHandle";
/**
 * How does web auth work
 *
 *
 * From the user email we get the public key
 *
 * We then use the public key to encrypt a jwt
 *
 * and validate the password
 *
 * if validation occurs we send an auth cookie that
 * is good for 15 minutes.
 *
 * With each successive request that auth cookie is
 * updated
 *
 * If the user uses an expired token it should take them
 * back to the initial page
 *
 *
 * @param email
 * @param password
 */
export declare function fluxWebsiteSignInAuthorization(email: any, password: any, token?: string): Promise<FluxTokenBackend<WebsiteSecurityHandle>>;
export declare function resetPassword(email: string, token: string): Promise<boolean>;
export declare function updatePassword(email: string, password: string, passwordResetCode: string, token: string): Promise<boolean>;
export declare function fluxWebsite2fa(number: string, token: string): Promise<FluxTokenBackend<WebsiteSecurityHandle>>;
/**
 * Complete sign-in with a PASSKEY instead of the emailed 2FA code. Call AFTER
 * fluxWebsiteSignInAuthorization (which proves the password and arms the
 * session), exactly where you'd otherwise call fluxWebsite2fa(code).
 *
 * Runs the WebAuthn assertion ceremony against the password-level session, then
 * completes 2FA with the secret the server issues on a valid assertion.
 */
export declare function fluxWebsitePasskey2fa(token: string): Promise<FluxTokenBackend<WebsiteSecurityHandle>>;
/** True if this browser can do passkeys (WebAuthn) at all. */
export declare function passkeySupported(): boolean;
/**
 * Enroll a new passkey for the signed-in merchant: fetch creation options, run
 * navigator.credentials.create(), and persist the attestation. Returns the
 * created credential's id + label.
 */
export declare function fluxWebsiteRegisterPasskey(label?: string): Promise<{
    credentialId?: string;
    label?: string;
}>;
/** List the signed-in merchant's registered passkeys (safe metadata only). */
export declare function fluxWebsiteListPasskeys(): Promise<import("../ajax/Responses/WebAuthnResponse").WebAuthnCredentialInfo[]>;
/** Remove one of the signed-in merchant's passkeys by its db id. */
export declare function fluxWebsiteDeletePasskey(credentialDbId: number): Promise<void>;
export declare function fluxWebsiteSignUp(email: string, password: string, token: string, additionalInfo: any): Promise<void>;
export declare function fluxWebsiteCookieAuthorization(): Promise<FluxTokenBackend<WebsiteSecurityHandle>>;
export declare function fluxSocketBrowser(secHandle: WebsiteSecurityHandle): Promise<FluxSocketImpl>;
export declare function fluxTokGetter(): FluxComms<import("../ajax/security/SecurityHandler").SecurityHandler>;
export declare function getAccountSessionFromOTPL(otpl: string): Promise<CreateSessionResponse>;
export declare function getMerchantPublicKeyFromOTPL(otpl: string): Promise<CreateSessionResponse>;
/**
 * React Native Sign-In Authorization
 *
 * Similar to fluxWebsiteSignInAuthorization but uses ReactNativeSecurityHandle
 * with session management via Expo SecureStore
 *
 * @param email - User email/username
 * @param password - User password (will be hashed)
 * @param token - Optional reCAPTCHA token
 */
export declare function fluxReactNativeSignInAuthorization(email: string, password: string, token?: string): Promise<FluxTokenBackend<ReactNativeSecurityHandle>>;
/**
 * React Native Session Authorization
 *
 * Attempts to authenticate using existing session token from SecureStore
 * Falls back to sign-in if no valid session
 *
 * @param email - User email/username (needed for public key lookup)
 */
export declare function fluxReactNativeSessionAuthorization(email: string, sessionToken: string): Promise<FluxTokenBackend<ReactNativeSecurityHandle>>;
export declare function fluxSendConfirmationEmail(email: string, token: string): Promise<void>;
export declare function fluxConfirmEmailCode(email: string, code: string, token: string): Promise<FluxComms<UserSecurityHandle>>;
export declare function fluxUpdatePaymentMethodSubscription(fma: FluxTokenBackend<UserSecurityHandle>, subscriptionId: number, paymentMethodId: number): Promise<void>;
export declare function fluxCancelSubscription(fma: FluxTokenBackend<UserSecurityHandle>, subscriptionId: number): Promise<FluxComms<UserSecurityHandle>>;
export declare function fluxRemovePaymentMethod(fma: FluxTokenBackend<UserSecurityHandle>, paymentMethodId: string): Promise<FluxComms<UserSecurityHandle>>;
/**
 * Logout and clear all session data
 * Clears both localStorage (session credentials, auth token) and in-memory cache
 */
export declare function fluxWebsiteLogout(): void;
