import { Observable, of } from "rxjs";
import { SecurityHandlerBase } from "./SecurityHandlerBase";
import { AxiosHeaders } from "axios";

// Request type enum
export enum RequestType {
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

export class ReactNativeSecurityHandle extends SecurityHandlerBase {
    private _clientEncryptionKey: string;
    private _password: string;
    private _token: string | null = null;
    private _requestType: RequestType;
    private _sessionToken: string | null = null;
    private _username: string | null = null;
    
    // Properties for password reset functionality
    public newPassword: string | null = null;
    public passwordCode: string | null = null;
    public passwordResetRequest: boolean = false;

    set sessionToken(sessionToken: string) {
        this._sessionToken = sessionToken;
    }

    get sessionToken(): string {
        return this._sessionToken;
    }

    // Session storage keys
    private static readonly SESSION_KEY = 'X-SESSION-TOKEN';

    constructor(
        pk: string, 
        pw: string, 
        sessionToken: string,
        username?: string,
        token?: string  // Optional reCAPTCHA token
    ) {
        super();
        this._clientEncryptionKey = pk;
        this._password = pw;
        this._sessionToken = sessionToken;
        this._username = username;
        this._token = token;
    }

    public async encodeRequest(request: string, headers: Map<string, string>): Promise<string> {
        // For React Native, we just return the request as-is
        // No encryption needed - just basic session validation
        // Username and password are sent in headers for sign-in requests
        return request;
    }

    public async decodeResponse(response: string, headers?: AxiosHeaders): Promise<string> {
 
        this._sessionToken = headers['x-session-header'];
        
        return response;
    }

    public async createHeaders(optional?: any): Promise<Map<string, string>> {
        let headersMap = new Map<string, string>();

        headersMap.set("X-Type", this._requestType);

        if (this._requestType === RequestType.DATA_REQUEST) {
            if (!this._sessionToken) {
                throw new Error('Session token required for DATA_REQUEST but not found in SecureStore');
            }
            headersMap.set("X-Username", this._username);
            headersMap.set("X-SESSION-HEADER", this._sessionToken);
        } else if (this._requestType === RequestType.SIGNIN_REQUEST) {
            // For sign in, we need username and password in headers
            if (!this._username) {
                throw new Error('Username required for SIGNIN_REQUEST');
            }
            if (!this._password) {
                throw new Error('Password required for SIGNIN_REQUEST');
            }
            
            // Add username and password to headers
            headersMap.set("X-Username", this._username);
            headersMap.set("X-Password", this._password);
            
      
        } else if (this._requestType === RequestType.AUTH_REQUEST) {
            headersMap.set("X-SESSION-HEADER", this._sessionToken);
            // For sign in, we need username and password in headers
            if (!this._username) {
                throw new Error('Username required for SIGNIN_REQUEST');
            }
            headersMap.set("X-Username", this._username);


        }



        if (this._token) {
            headersMap.set("X-Token", this._token);
            this._token = null; // Clear token after use
        }
        return headersMap;
    }

    // Getters and setters
    set token(t: string) {
        this._token = t;
    }

    set requestType(type: RequestType) {
        this._requestType = type;
    }

    get requestType(): RequestType {
        return this._requestType;
    }

}