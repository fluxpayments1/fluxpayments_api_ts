"use strict";
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
exports.MerchantEndpointsSecurityHandle = void 0;
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
const SecurityHandlerBase_1 = require("./SecurityHandlerBase");
class MerchantEndpointsSecurityHandle extends SecurityHandlerBase_1.SecurityHandlerBase {
    encodeRequest(request, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            let newRequest = SecurityHandlerBase_1.SecurityHandlerBase.encryptAES(this._privateKey, MerchantEndpointsSecurityHandle._nonceMap.get(headers.get("X-Auth")), request);
            return JSON.stringify({ encData: newRequest });
        });
    }
    get publicKey() {
        return this._publicKey;
    }
    set publicKey(value) {
        this._publicKey = value;
    }
    constructor(pk, prk, un, pw) {
        super();
        this._publicKey = pk;
        this._privateKey = prk;
        this._username = SecurityHandlerBase_1.SecurityHandlerBase.encryptRsa(this.publicKey, un);
        this._password = SecurityHandlerBase_1.SecurityHandlerBase.encryptRsa(this.publicKey, pw);
    }
    decodeResponse(response, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            let newRequest = SecurityHandlerBase_1.SecurityHandlerBase.decryptAES(this._privateKey, MerchantEndpointsSecurityHandle._nonceMap.get(headers.get("X-Auth")), JSON.parse(response).encData);
            return newRequest;
        });
    }
    createHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            let headersMap = new Map();
            let nonce = SecurityHandlerBase_1.SecurityHandlerBase.generateNonce();
            let nonceEnc = SecurityHandlerBase_1.SecurityHandlerBase.encryptRsa(this.publicKey, nonce);
            let currentTimeMilliseconds = new Date().getTime();
            let concatenatedXAuth = this._username
                .concat(" ")
                .concat(this._password)
                .concat(" ")
                .concat(currentTimeMilliseconds.toString());
            let xAuthEnc = SecurityHandlerBase_1.SecurityHandlerBase.encryptAES(this._privateKey, nonce, concatenatedXAuth);
            MerchantEndpointsSecurityHandle._nonceMap.set(xAuthEnc, nonce);
            headersMap.set("X-Key", this.publicKey);
            headersMap.set("X-Auth", xAuthEnc);
            headersMap.set("X-Nonce", nonceEnc);
            return headersMap;
        });
    }
}
exports.MerchantEndpointsSecurityHandle = MerchantEndpointsSecurityHandle;
MerchantEndpointsSecurityHandle._nonceMap = new Map();
//# sourceMappingURL=MerchantEndpointsSecurityHandle.js.map