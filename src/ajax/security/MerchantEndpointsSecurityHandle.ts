/*
 * Copyright (c) 2024 Flux Payment Solutions Company
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { SecurityHandlerBase } from "./SecurityHandlerBase";

export class MerchantEndpointsSecurityHandle extends SecurityHandlerBase {
    public async encodeRequest(request: string, headers: Map<string, string>) : Promise<string> {
        let newRequest = SecurityHandlerBase.encryptAES(this._privateKey, MerchantEndpointsSecurityHandle._nonceMap.get(headers.get("X-Auth")), request);
        return JSON.stringify({encData: newRequest});
    }

    private static _nonceMap : Map<string, string> = new Map<string, string>()

    private _publicKey : string
    private _privateKey : string
    private _username : string
    private _password: string

    get publicKey(): string {
        return this._publicKey;
    }

    set publicKey(value: string) {
        this._publicKey = value;
    }

    constructor(pk :string, prk : string, un : string, pw : string) {
        super()
        this._publicKey = pk
        this._privateKey = prk
        this._username = SecurityHandlerBase.encryptRsa(this.publicKey, un)
        this._password = SecurityHandlerBase.encryptRsa(this.publicKey, pw)
    }

    public async decodeResponse(response: string, headers?: any): Promise<string> {
        let newRequest = SecurityHandlerBase.decryptAES(this._privateKey, MerchantEndpointsSecurityHandle._nonceMap.get(headers.get("X-Auth")), JSON.parse(response).encData);
        return newRequest;
    }

    public async createHeaders(): Promise<Map<string, string>> {
        let headersMap = new Map<string, string>();

        let nonce = SecurityHandlerBase.generateNonce()

        let nonceEnc = SecurityHandlerBase.encryptRsa(this.publicKey, nonce);
        let currentTimeMilliseconds = new Date().getTime();

        let concatenatedXAuth = this._username
            .concat(" ")
            .concat(this._password)
            .concat(" ")
            .concat(currentTimeMilliseconds.toString());

        let xAuthEnc = SecurityHandlerBase.encryptAES(this._privateKey, nonce, concatenatedXAuth);

        MerchantEndpointsSecurityHandle._nonceMap.set(xAuthEnc, nonce);

        headersMap.set("X-Key", this.publicKey);
        headersMap.set("X-Auth", xAuthEnc);
        headersMap.set("X-Nonce", nonceEnc)

        return headersMap
    }

}