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
exports.PaymentMethod = void 0;
const SensitiveClientDataSecurityHandle_1 = require("../ajax/security/SensitiveClientDataSecurityHandle");
const Address_1 = require("./Address");
const FluxType_1 = require("./FluxType");
const SecurityHandlerBase_1 = require("../ajax/security/SecurityHandlerBase");
class PaymentMethod extends FluxType_1.FluxType {
    serialize() {
        return {
            objectType: this.objectType,
            id: this.id,
            uniqueId: this.uniqueId,
            metadata: this.metadata,
            payType: this.payType,
            address: this.address,
            encSensitiveData: this.encSensitiveData,
            encAesKey: this.encAesKey,
            aesNonce: this.aesNonce
        };
    }
    static createInstanceSafeDbCall(inst, pt) {
        return __awaiter(this, void 0, void 0, function* () {
            delete pt.accountSession;
            delete pt.id;
            delete pt.uniqueId;
            delete pt.address;
            delete pt.metadata;
            let instance = inst;
            let secH = yield (yield FluxType_1.FluxType.getBackendConn()).securityHandle;
            let aesKey = SecurityHandlerBase_1.SecurityHandlerBase.genAesKey();
            let aesNonce = SecurityHandlerBase_1.SecurityHandlerBase.generateNonce();
            let cardBase64 = SecurityHandlerBase_1.SecurityHandlerBase.utf8ToBase64(JSON.stringify(pt));
            instance.encSensitiveData = SecurityHandlerBase_1.SecurityHandlerBase.encryptAES(aesKey, aesNonce, cardBase64);
            instance.encAesKey = SecurityHandlerBase_1.SecurityHandlerBase.encryptRsa(secH.publicKey, aesKey);
            instance.aesNonce = aesNonce;
            //Clear out memory for safety
            for (const key in pt) {
                if (Object.hasOwnProperty.call(pt, key)) {
                    pt[key] = undefined;
                }
            }
            let f = yield FluxType_1.FluxType.getBackendConn();
            let secHandle = undefined;
            if (instance.accountSession) {
                secHandle = new SensitiveClientDataSecurityHandle_1.SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, instance.accountSession);
            }
            let obs = yield PaymentMethod.createObjectsSafe(instance, secHandle);
            return obs[0];
        });
    }
    constructor(c) {
        super(c, PaymentMethod);
        this.obName = "PaymentMethod";
        this.objectType = "payment_method";
        if (!c)
            return;
        this.id = c.id;
        this.uniqueId = c.uniqueId;
        this.metadata = c.metadata;
        this.address = new Address_1.Address(c.address);
        this.accountSession = c.accountSession;
    }
    static updateObjects(ob) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType_1.FluxType.getBackendConn();
            let firstOb = ob[0];
            let secHandle = new SensitiveClientDataSecurityHandle_1.SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, firstOb.accountSession);
            let obs = yield f.updateObjects(ob, secHandle);
            return obs;
        });
    }
    static createObjects(ob) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType_1.FluxType.getBackendConn();
            let firstOb = ob[0];
            let secHandle = new SensitiveClientDataSecurityHandle_1.SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, firstOb.accountSession);
            let obs = yield f.createObjectGeneric(ob, secHandle);
            return obs;
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType_1.FluxType.getBackendConn();
            yield f.deleteObjects(this.getId(), this.obType);
            Object.keys(this).forEach(e => {
                this[e] = undefined;
            });
            Object.assign(this, {});
        });
    }
    ;
    merge() {
        return __awaiter(this, void 0, void 0, function* () {
            let t = this.obType;
            let f = yield FluxType_1.FluxType.getBackendConn();
            let obs = yield f.updateObjects(this);
            if (obs.length !== 1)
                throw new Error("couldn't persist the object");
            Object.assign(this, obs[0]);
        });
    }
    ;
    persist() {
        return __awaiter(this, void 0, void 0, function* () {
            let obs = yield PaymentMethod.createObjects(this);
            this.setId(obs[0]);
        });
    }
    ;
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            let obs = yield PaymentMethod.getObjectsByIdInternal(this.getId(), this.obType);
            if (obs.length !== 1)
                throw new Error("couldn't refresh the object");
            Object.assign(this, obs[0]);
        });
    }
    ;
    static queryObjects(q) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType_1.FluxType.getBackendConn();
            let secHandle = undefined;
            if (q.accountSession) {
                secHandle = new SensitiveClientDataSecurityHandle_1.SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, q.accountSession);
            }
            let obs = yield f.getObjects(q, secHandle);
            return obs;
        });
    }
    static deleteObjects(fi, accountSession) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType_1.FluxType.getBackendConn();
            let secHandle = undefined;
            if (accountSession) {
                secHandle = new SensitiveClientDataSecurityHandle_1.SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, accountSession);
            }
            return yield f.deleteObjects(fi, this, secHandle);
        });
    }
    static createObjectsSafe(ob, secHandle) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = yield FluxType_1.FluxType.getBackendConn();
            let obs = yield f.createObjectGenericSafe(ob, secHandle);
            return obs;
        });
    }
}
exports.PaymentMethod = PaymentMethod;
//# sourceMappingURL=PaymentMethod.js.map