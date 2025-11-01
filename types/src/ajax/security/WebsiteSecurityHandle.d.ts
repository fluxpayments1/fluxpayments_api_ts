import { SecurityHandlerBase } from "./SecurityHandlerBase";
import { AxiosHeaders } from "axios";
export declare class WebsiteSecurityHandle extends SecurityHandlerBase {
    private _requestXAes;
    private _requestXNonce;
    private _requestXAuth;
    private _requestEncryptedRequest;
    encodeRequest(request: string, headers: Map<string, string>): Promise<string>;
    private minutes;
    private days;
    private _clientEncryptionKey;
    private _password;
    private _serverEncryptionKey;
    private _clientDecryptionKey;
    private _authToken;
    private _resetPassword;
    private _passwordResetRequest;
    private _passwordCode;
    private _newPassword;
    private _reAuth;
    private _isSignUpRequest;
    private _signUpEmail;
    private _signUpPassword;
    _isSignUpAndSetPasswordRequest: boolean;
    private _token;
    constructor(pk: string, pw: string, rsaKeyPair: {
        publicKey: string;
        privateKey: string;
    }, token?: string, loadSavedAuthToken?: boolean);
    set passwordCode(s: string);
    set newPassword(s: string);
    set passwordResetRequest(b: boolean);
    set resetPassword(b: boolean);
    set twoFa(number: string);
    set token(t: string);
    /**
     * Create a clone of this security handle with the same session credentials
     * but fresh request-scoped crypto state. This enables parallel requests.
     */
    clone(): WebsiteSecurityHandle;
    establishReauth(): Promise<void>;
    decodeResponse(response: string, headers?: AxiosHeaders): Promise<string>;
    createHeaders(optional?: any): Promise<Map<string, string>>;
}
