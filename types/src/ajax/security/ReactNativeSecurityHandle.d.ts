import { SecurityHandlerBase } from "./SecurityHandlerBase";
import { AxiosHeaders } from "axios";
export declare enum RequestType {
    DATA_REQUEST = "DATA_REQUEST",
    AUTH_REQUEST = "AUTH_REQUEST",
    SIGNIN_REQUEST = "SIGNIN_REQUEST"
}
/**
 * ReactNativeSecurityHandle - Simplified security handler for React Native
 *
 * Features:
 * - Session-based authentication using Expo SecureStore
 * - Optional reCAPTCHA validation for sign-in requests
 * - Header-based credentials (X-Username, X-Password)
 * - No message encryption (simplified for mobile)
 *
 * reCAPTCHA Integration:
 * - Install: npm install react-native-recaptcha-v3
 * - Get token from reCAPTCHA and pass to constructor
 * - Backend validates token using existing Recaptcha.confirmRecaptch()
 */
export declare class ReactNativeSecurityHandle extends SecurityHandlerBase {
    private _clientEncryptionKey;
    private _password;
    private _token;
    private _requestType;
    private _sessionToken;
    private _username;
    newPassword: string | null;
    passwordCode: string | null;
    passwordResetRequest: boolean;
    set sessionToken(sessionToken: string);
    get sessionToken(): string;
    private static readonly SESSION_KEY;
    constructor(pk: string, pw: string, sessionToken: string, username?: string, token?: string);
    encodeRequest(request: string, headers: Map<string, string>): Promise<string>;
    decodeResponse(response: string, headers?: AxiosHeaders): Promise<string>;
    createHeaders(optional?: any): Promise<Map<string, string>>;
    set token(t: string);
    set requestType(type: RequestType);
    get requestType(): RequestType;
}
