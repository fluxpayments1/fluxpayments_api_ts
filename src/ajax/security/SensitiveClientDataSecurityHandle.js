"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveClientDataSecurityHandle = void 0;
const SecurityHandlerBase_1 = require("./SecurityHandlerBase");
class SensitiveClientDataSecurityHandle extends SecurityHandlerBase_1.SecurityHandlerBase {
    encodeRequest(request, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            //First generate RSA_ENC_AES_KEY
            let base64Key = SecurityHandlerBase_1.SecurityHandlerBase.genAesKey();
            let base64EncKey = SecurityHandlerBase_1.SecurityHandlerBase.encryptRsa(this._publicKey, base64Key);
            let accHeader = {
                "iat": new Date().getTime(),
                "account_session": this._accountSession
            };
            let accHeaderString = JSON.stringify(accHeader);
            let base64Nonce = headers.get("X-Nonce");
            let base64AccHeaderEnc = SecurityHandlerBase_1.SecurityHandlerBase.encryptAES(base64Key, base64Nonce, accHeaderString);
            let base64EncRequest = SecurityHandlerBase_1.SecurityHandlerBase.encryptAES(base64Key, base64Nonce, request);
            //Place nonce on map
            SensitiveClientDataSecurityHandle.nonceKeyMap.set(base64Nonce, base64Key);
            return "{\"encData\":" + "\"" + base64EncKey + "." + base64AccHeaderEnc + "." + base64EncRequest + "\"}";
        });
    }
    get publicKey() {
        return this._publicKey;
    }
    set publicKey(value) {
        this._publicKey = value;
    }
    get accountSession() {
        return this._accountSession;
    }
    set accountSession(as) {
        this._accountSession = as;
    }
    constructor(pk, as) {
        super();
        this._publicKey = pk;
        this._accountSession = as;
    }
    decodeResponse(response, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            let base64LookupNonce = headers.get('X-Lookup-Nonce');
            let base64Nonce = headers.get('X-Nonce');
            let base64AesKey = SensitiveClientDataSecurityHandle.nonceKeyMap.get(base64LookupNonce);
            if (!base64AesKey)
                throw new Error("decryption error");
            SensitiveClientDataSecurityHandle.nonceKeyMap.delete(base64LookupNonce);
            return SecurityHandlerBase_1.SecurityHandlerBase.decryptAES(base64AesKey, base64Nonce, JSON.parse(response).encData);
        });
    }
    createHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            let base64Nonce = SecurityHandlerBase_1.SecurityHandlerBase.generateNonce();
            let hdrs = new Map();
            hdrs.set("X-Nonce", base64Nonce);
            hdrs.set("X-Key", this._publicKey);
            return hdrs;
        });
    }
}
exports.SensitiveClientDataSecurityHandle = SensitiveClientDataSecurityHandle;
SensitiveClientDataSecurityHandle.nonceKeyMap = new Map();
//# sourceMappingURL=SensitiveClientDataSecurityHandle.js.map