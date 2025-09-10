import { Observable, of } from "rxjs";
import { SecurityHandlerBase } from "./SecurityHandlerBase";
import { AxiosHeaders } from "axios";
import Cookies from 'js-cookie'

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
    public async encodeRequest(request: string, headers: Map<string, string>): Promise<string> {

        if (this._reAuth) {
            this._reAuth = false
            return localStorage.getItem("XENCREQ")
        }


        localStorage.setItem("XENCREQ", '{"encData":'
            + '"' +
            await SecurityHandlerBase.encryptAESBrowser(
                this._authToken.getGeneratedAESEncryptionKey(),
                this._authToken.getGeneratedNonce(),
                "{}"
            )
            + '"'
            + "}",
        )

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
    }, token?: string) {
        super()
        this._clientEncryptionKey = pk
        this._password = pw
        this._serverEncryptionKey = rsaKeyPair.publicKey
        this._clientDecryptionKey = rsaKeyPair.privateKey
        this._authToken = new JWTAuthHeader()
        this._token = token;
        localStorage.setItem("XAUTH_KEY_PRIV", this._clientDecryptionKey)
        localStorage.setItem("XAUTH_KEY_PUB", this._serverEncryptionKey)
        localStorage.setItem("PUB_KEY", pk)


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



    async establishReauth(): Promise<void> {
        this._reAuth = true
    }

    public async decodeResponse(response: string, headers?: AxiosHeaders): Promise<string> {
        let nonce = headers.get("X-Nonce").toString();

        let aes = await SecurityHandlerBase.decryptRsaBrowser(this._clientDecryptionKey, headers.get("X-AES").toString())
        let auth = await SecurityHandlerBase.decryptAESBrowser(aes, nonce, headers.get("X-Auth").toString())

        Object.assign(this._authToken, JSON.parse(auth))

        localStorage.setItem("XAUTH_KEY_PRIV", this._clientDecryptionKey)
        localStorage.setItem("XAUTH_KEY_PUB", this._serverEncryptionKey)
        localStorage.setItem("PUB_KEY", this._clientEncryptionKey)

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

            headersMap.set("X-AES", localStorage.getItem("XAES"));
            headersMap.set("X-Nonce", localStorage.getItem("XNONCE"));
            headersMap.set("X-Auth", localStorage.getItem("XAUTH"));
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



        localStorage.setItem("XNONCE", xNonce)
        localStorage.setItem("XAES", encAes)
        localStorage.setItem("XAUTH", encString)
        return headersMap
    }

}