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

import { SecurityHandlerBase } from "./";

export class SensitiveClientDataSecurityHandle extends SecurityHandlerBase {


    private static nonceKeyMap : Map<string, string> = new Map();

    public async encodeRequest(request: string, headers: Map<string, string>) : Promise<string> {
        //First generate RSA_ENC_AES_KEY
        let base64Key :string = SecurityHandlerBase.genAesKey()

        let base64EncKey = SecurityHandlerBase.encryptRsa(this._publicKey, base64Key)

        let accHeader = {
            "iat": new Date().getTime(),
            "account_session": this._accountSession
        }

        let accHeaderString = JSON.stringify(accHeader)

        let base64Nonce = headers.get("X-Nonce");

        let base64AccHeaderEnc = SecurityHandlerBase.encryptAES(base64Key, base64Nonce, accHeaderString)
        let base64EncRequest = SecurityHandlerBase.encryptAES(base64Key, base64Nonce, request)

        //Place nonce on map
        SensitiveClientDataSecurityHandle.nonceKeyMap.set(base64Nonce, base64Key);

        return "{\"encData\":" + "\"" + base64EncKey + "." + base64AccHeaderEnc + "." + base64EncRequest + "\"}"
    }


    private _publicKey : string
    private _accountSession : string

    get publicKey(): string {
        return this._publicKey;
    }

    set publicKey(value: string) {
        this._publicKey = value;
    }

    get accountSession () :string {
        return this._accountSession
    }

    set accountSession(as: string) {
        this._accountSession = as;
    }

    constructor(pk :string, as: string) {
        super()
        this._publicKey = pk
        this._accountSession = as;
    }

    public async decodeResponse(response: string, headers?: any): Promise<string> {
        let base64LookupNonce = headers.get('X-Lookup-Nonce');
        let base64Nonce = headers.get('X-Nonce');
        
        let base64AesKey = SensitiveClientDataSecurityHandle.nonceKeyMap.get(base64LookupNonce);

        if (!base64AesKey) throw new Error("decryption error");

        SensitiveClientDataSecurityHandle.nonceKeyMap.delete(base64LookupNonce)

        return SecurityHandlerBase.decryptAES(base64AesKey, base64Nonce, JSON.parse(response).encData)
    }

    public async createHeaders(): Promise<Map<string, string>> {
        let base64Nonce = SecurityHandlerBase.generateNonce()
        let hdrs = new Map<string, string>();
        hdrs.set("X-Nonce", base64Nonce)
        hdrs.set("X-Key", this._publicKey);
        return hdrs;
    }

}