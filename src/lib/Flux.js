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
exports.Flux = void 0;
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
const CreateSessionRequest_1 = require("../ajax/Requests/CreateSessionRequest");
const GenericCreatorRequest_1 = require("../ajax/Requests/GenericCreatorRequest");
const GenericGetterRequest_1 = require("../ajax/Requests/GenericGetterRequest");
const GenericDeleterRequest_1 = require("../ajax/Requests/GenericDeleterRequest");
const GenericGetByIdRequest_1 = require("../ajax/Requests/GenericGetByIdRequest");
const GenericUpdaterRequest_1 = require("../ajax/Requests/GenericUpdaterRequest");
const ChngProdInvCntRequest_1 = require("../ajax/Requests/ChngProdInvCntRequest");
const GenAuthReq_1 = require("../ajax/Requests/GenAuthReq");
const Responses_1 = require("../ajax/Responses");
const lib_1 = require("../ajax/lib");
const security_1 = require("../ajax/security");
class Flux {
    constructor() {
        this._isAuthenticated = false;
    }
    static getInstance() {
        if (Flux.fb) {
            return Flux.fb;
        }
        Flux.fb = new Flux();
        return Flux.fb;
    }
    get isAuthenticated() {
        return this._isAuthenticated;
    }
    set isAuthenticated(b) {
        this._isAuthenticated = b;
    }
    get securityHandle() {
        return this._securityHandle;
    }
    set securityHandle(securityHandle) {
        this._securityHandle = securityHandle;
    }
    getGeneralAuthorizationAccess(customerPublicKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return lib_1.CMMT.fetch(GenAuthReq_1.GenAuthReq, Responses_1.GenAuthRes, "getGeneralAuthorization", "POST", new security_1.GenAuthDataSecurityHandle(), customerPublicKey);
        });
    }
    /**
     * Creates a Session with an account id
     *
     *
     * @param accoundId The account id used to create a session
     * @returns a session id
     */
    createSession(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(this._securityHandle instanceof security_1.MerchantEndpointsSecurityHandle))
                throw new Error("sessions must be created server side");
            return lib_1.CMMT.fetch(CreateSessionRequest_1.CreateSessionRequest, Responses_1.CreateSessionResponse, "createSession", "POST", this._securityHandle, id);
        });
    }
    createObjectGeneric(ob, secHandle) {
        return __awaiter(this, void 0, void 0, function* () {
            let obName;
            if (Array.isArray(ob))
                obName = ob[0].obName;
            else
                obName = ob.obName;
            return lib_1.CMMT.fetch(GenericCreatorRequest_1.GenericCreatorRequest, Responses_1.GenericCreatorResponse, `create${obName}`, "POST", secHandle || this._securityHandle, ob);
        });
    }
    createObjectGenericSafe(ob, secHandle) {
        return __awaiter(this, void 0, void 0, function* () {
            let obName;
            let obType;
            if (Array.isArray(ob)) {
                obName = ob[0].obName;
                obType = ob[0].obType;
            }
            else {
                obName = ob.obName;
                obType = ob.obType;
            }
            return lib_1.CMMT.fetchGeneric(GenericCreatorRequest_1.GenericCreatorRequest, (Responses_1.GenericGetterResponse), obType, `create${obName}InstanceSafe`, "POST", secHandle || this._securityHandle, ob);
        });
    }
    getObjects(query, secHandle) {
        return __awaiter(this, void 0, void 0, function* () {
            let obType = query.attachedObject;
            let name = new obType().obName;
            return lib_1.CMMT.fetchGeneric((GenericGetterRequest_1.GenericGetterRequest), (Responses_1.GenericGetterResponse), obType, `get${name}`, "POST", this._securityHandle, query);
        });
    }
    deleteObjects(ids, obType, secHandle) {
        return __awaiter(this, void 0, void 0, function* () {
            let obName = new obType().obName;
            return lib_1.CMMT.fetch(GenericDeleterRequest_1.GenericDeleterRequest, Responses_1.GenericDeleterResponse, `delete${obName}`, "POST", secHandle || this._securityHandle, ids);
        });
    }
    getObjectsById(fi, obType) {
        return __awaiter(this, void 0, void 0, function* () {
            let obName = new obType().obName;
            return lib_1.CMMT.fetchGeneric(GenericGetByIdRequest_1.GenericGetByIdRequest, (Responses_1.GenericGetterResponse), obType, `get${obName}ById`, "POST", this._securityHandle, fi);
        });
    }
    getLinkedObjectsById(fi, obType, obType2) {
        return __awaiter(this, void 0, void 0, function* () {
            let obName = new obType().obName;
            let obName2 = new obType2().obName;
            return lib_1.CMMT.fetchGeneric(GenericGetByIdRequest_1.GenericGetByIdRequest, (Responses_1.GenericGetterResponse), obType2, `get${obName.concat(obName2)}ById`, "POST", this._securityHandle, fi);
        });
    }
    updateObjects(ob, securityHandle) {
        return __awaiter(this, void 0, void 0, function* () {
            let obType;
            let obName;
            if (Array.isArray(ob)) {
                obName = ob[0].obName;
                obType = ob[0].obType;
            }
            else {
                obName = ob.obName;
                obType = ob.obType;
            }
            return lib_1.CMMT.fetchGeneric((GenericUpdaterRequest_1.GenericUpdaterRequest), (Responses_1.GenericUpdaterResponse), obType, `update${obName}`, "POST", securityHandle || this._securityHandle, ob);
        });
    }
    updateProductQuantity(multiplier, quantity, fi) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(this._securityHandle instanceof security_1.MerchantEndpointsSecurityHandle))
                throw new Error("inventory must be changed server side");
            return lib_1.CMMT.fetch(ChngProdInvCntRequest_1.ChngProdInvCntRequest, Responses_1.UpdateProductResponse, "updateProductQuantity", "POST", this._securityHandle, multiplier, quantity, fi);
        });
    }
}
exports.Flux = Flux;
//# sourceMappingURL=Flux.js.map