import { Observable, of } from "rxjs";
import { SecurityHandlerBase } from "./SecurityHandlerBase";
import { AxiosHeaders } from "axios";
import Cookies from 'js-cookie'
import { SessionStorage } from './SessionStorage';

class JWTAuthHeader {
    private generatedAESEncryptionKey: string;
    private generatedNonce: string;
    private passwordSaltedByPublicKey: string;
    private originIp: string;
    private userAgentSHA256: string;
    private timeStamp: number | null;
    private encryptedTimeStamp: string;
    private encryptedTimeStampNonce: string;
    private encryptionKey: string;
    private twoFactAuthCodeShadPublicKey: string;

    constructor() {

    }

    public getGeneratedAESEncryptionKey(): string {
        return this.generatedAESEncryptionKey;
    }

    public getTwoFactAuthCodeShadPublicKey(): string {
        return this.twoFactAuthCodeShadPublicKey
    }

    public setTwoFactAuthCodeShadPublicKey(s: string) {
        this.twoFactAuthCodeShadPublicKey = s;
    }

    public setGeneratedAESEncryptionKey(generatedAESEncryptionKey: string): void {
        this.generatedAESEncryptionKey = generatedAESEncryptionKey;
    }

    public getGeneratedNonce(): string {
        return this.generatedNonce;
    }

    public setGeneratedNonce(generatedNonce: string): void {
        this.generatedNonce = generatedNonce;
    }

    public getPasswordSaltedByPublicKey(): string {
        return this.passwordSaltedByPublicKey;
    }

    public setPasswordSaltedByPublicKey(passwordSaltedByPublicKey: string): void {
        this.passwordSaltedByPublicKey = passwordSaltedByPublicKey;
    }

    public getTimeStamp(): number | null {
        return this.timeStamp;
    }

    public setTimeStamp(timeStamp: number | null): void {
        this.timeStamp = timeStamp;
    }

    public getOriginIp(): string {
        return this.originIp;
    }

    public setOriginIp(originIp: string): void {
        this.originIp = originIp;
    }

    public getUserAgentSHA256(): string {
        return this.userAgentSHA256;
    }

    public setUserAgentSHA256(userAgentSHA256: string): void {
        this.userAgentSHA256 = userAgentSHA256;
    }

    public getEncryptedTimeStamp(): string {
        return this.encryptedTimeStamp;
    }

    public setEncryptedTimeStamp(encryptedTimeStamp: string): void {
        this.encryptedTimeStamp = encryptedTimeStamp;
    }

    public getEncryptedTimeStampNonce(): string {
        return this.encryptedTimeStampNonce;
    }

    public setEncryptedTimeStampNonce(encryptedTimeStampNonce: string): void {
        this.encryptedTimeStampNonce = encryptedTimeStampNonce;
    }

    public getEncryptionKey(): string {
        return this.encryptionKey
    }

    public setEncryptionKey(encKey: string): void {
        this.encryptionKey = encKey
    }
}


export class WebsiteSecurityHandle extends SecurityHandlerBase {
    // Request-scoped data (unique per request, stored in memory)
    private _requestXAes: string;
    private _requestXNonce: string;
    private _requestXAuth: string;
    private _requestEncryptedRequest: string;

    public async encodeRequest(request: string, headers: Map<string, string>): Promise<string> {

        if (this._reAuth) {
            this._reAuth = false
            return this._requestEncryptedRequest
        }

        // Store the empty request for potential reauth
        this._requestEncryptedRequest = '{"encData":'
            + '"' +
            await SecurityHandlerBase.encryptAESBrowser(
                this._authToken.getGeneratedAESEncryptionKey(),
                this._authToken.getGeneratedNonce(),
                "{}"
            )
            + '"'
            + "}"

        return '{"encData":'
            + '"' +
            await SecurityHandlerBase.encryptAESBrowser(
                this._authToken.getGeneratedAESEncryptionKey(),
                this._authToken.getGeneratedNonce(),
                request
            )
            + '"'
            + "}";

    }

    private minutes = 180;
    private days = this.minutes / (24 * 60);

    private _clientEncryptionKey: string
    private _password: string
    private _serverEncryptionKey: string
    private _clientDecryptionKey: string
    private _authToken: JWTAuthHeader
    private _resetPassword: boolean
    private _passwordResetRequest: boolean;
    private _passwordCode: string
    private _newPassword: string;
    private _reAuth: boolean = false;
    private _isSignUpRequest: boolean = false;
    private _signUpEmail;
    private _signUpPassword;
    _isSignUpAndSetPasswordRequest: boolean = false;
    private _token: string;
    constructor(pk: string, pw: string, rsaKeyPair: {
        publicKey: string,
        privateKey: string
    }, token?: string, loadSavedAuthToken: boolean = false) {
        super()
        this._clientEncryptionKey = pk
        this._password = pw
        this._serverEncryptionKey = rsaKeyPair.publicKey
        this._clientDecryptionKey = rsaKeyPair.privateKey
        
        // Load saved auth token for cookie-based auth, or create new for login
        if (loadSavedAuthToken) {
            const savedToken = SessionStorage.getAuthToken();
            if (savedToken) {
                this._authToken = Object.assign(new JWTAuthHeader(), savedToken);
            } else {
                this._authToken = new JWTAuthHeader();
            }
        } else {
            this._authToken = new JWTAuthHeader();
        }
        
        this._token = token;
        
        // Save session credentials (persistent across requests)
        SessionStorage.saveSessionCredentials(
            this._clientDecryptionKey,
            this._serverEncryptionKey,
            pk
        );
    }

    set passwordCode(s: string) {
        this._passwordCode = s;
    }

    set newPassword(s: string) {
        this._newPassword = s;
    }

    set passwordResetRequest(b: boolean) {
        this._passwordResetRequest = b;
    }

    set resetPassword(b: boolean) {
        this._resetPassword = b
    }

    set twoFa(number: string) {
        this._authToken.setTwoFactAuthCodeShadPublicKey(SecurityHandlerBase.sha256(number, this._clientEncryptionKey))
    }

    set token(t: string) {
        this._token = t;
    }

    /**
     * Create a clone of this security handle with the same session credentials
     * but fresh request-scoped crypto state. This enables parallel requests.
     */
    public clone(): WebsiteSecurityHandle {
        const cloned = new WebsiteSecurityHandle(
            this._clientEncryptionKey,
            undefined, // No password for cloned instance
            {
                publicKey: this._serverEncryptionKey,
                privateKey: this._clientDecryptionKey
            },
            undefined,
            true // Load saved auth token
        );
        
        // Copy any session-level state that's not in SessionStorage
        cloned._resetPassword = this._resetPassword;
        cloned._passwordResetRequest = this._passwordResetRequest;
        cloned._passwordCode = this._passwordCode;
        cloned._newPassword = this._newPassword;
        
        return cloned;
    }

    async establishReauth(): Promise<void> {
        this._reAuth = true
    }

    public async decodeResponse(response: string, headers?: AxiosHeaders): Promise<string> {
        let nonce = headers.get("X-Nonce").toString();

        let aes = await SecurityHandlerBase.decryptRsaBrowser(this._clientDecryptionKey, headers.get("X-AES").toString())
        let auth = await SecurityHandlerBase.decryptAESBrowser(aes, nonce, headers.get("X-Auth").toString())

        Object.assign(this._authToken, JSON.parse(auth))

        // Save updated session credentials and auth token
        SessionStorage.saveSessionCredentials(
            this._clientDecryptionKey,
            this._serverEncryptionKey,
            this._clientEncryptionKey
        );
        SessionStorage.saveAuthToken(this._authToken);

        let res = SecurityHandlerBase.decryptAESBrowser(
            this._authToken.getGeneratedAESEncryptionKey(),
            this._authToken.getGeneratedNonce(),
            JSON.parse(response).encData
        )

        return res

    }

    public async createHeaders(optional?: any): Promise<Map<string, string>> {
        let headersMap = new Map<string, string>();

        headersMap.set("X-Key", this._clientEncryptionKey)


        if (this._resetPassword) {
            headersMap.set("X-FPR", "true")
        }

        if (this._passwordResetRequest) {
            headersMap.set("X-FPU", "true")
            headersMap.set("X-Password-Code", await SecurityHandlerBase.encryptRsaBrowser(this._clientEncryptionKey, this._passwordCode))
            headersMap.set("X-New-Password", await SecurityHandlerBase.encryptRsaBrowser(this._clientEncryptionKey, this._newPassword))
        }


        if (this._token) {
            headersMap.set("X-Token", this._token)
            delete this._token
        }

        if (this._reAuth || optional) {
            // Use stored request-scoped data from this instance
            headersMap.set("X-AES", this._requestXAes);
            headersMap.set("X-Nonce", this._requestXNonce);
            headersMap.set("X-Auth", this._requestXAuth);
            return headersMap
        }



        if (this._password) {
            this._authToken.setPasswordSaltedByPublicKey(this._password);
            delete this._password
        }
        this._authToken.setGeneratedAESEncryptionKey(SecurityHandlerBase.genAesKey())
        this._authToken.setGeneratedNonce(SecurityHandlerBase.generateNonce())
        this._authToken.setEncryptionKey(this._serverEncryptionKey);

        let authHeaderStr = JSON.stringify(this._authToken);
        let xAes = SecurityHandlerBase.genAesKey()
        let xNonce = SecurityHandlerBase.generateNonce();


        let encAes = await SecurityHandlerBase.encryptRsaBrowser(this._clientEncryptionKey, xAes);

        headersMap.set("X-AES", encAes);
        headersMap.set("X-Nonce", xNonce);

        let encString = await SecurityHandlerBase.encryptAESBrowser(xAes, xNonce, authHeaderStr)
        headersMap.set("X-Auth", encString)

        // Store in request-scoped instance variables (not localStorage)
        this._requestXNonce = xNonce
        this._requestXAes = encAes
        this._requestXAuth = encString
        
        return headersMap
    }

}