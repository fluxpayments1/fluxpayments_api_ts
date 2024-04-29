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
exports.FluxWebsockets = exports.Subscription = void 0;
const security_1 = require("../ajax/security");
const lib_1 = require("../ajax/lib");
const flux_types_1 = require("../flux_types/");
const Requests_1 = require("../ajax/Requests/");
const Responses_1 = require("../ajax/Responses/");
const security_2 = require("../ajax/security/");
const events_1 = require("events");
var Subscription;
(function (Subscription) {
    Subscription["ACCOUNT_CREATE"] = "ACCOUNT.CREATE";
    Subscription["ACCOUNT_UPDATE"] = "ACCOUNT.UPDATE";
    Subscription["ACCOUNT_DELETE"] = "ACCOUNT.DELETE";
    Subscription["PRODUCT_CREATE"] = "PRODUCT.CREATE";
    Subscription["PRODUCT_UPDATE"] = "PRODUCT.UPDATE";
    Subscription["PRODUCT_DELETE"] = "PRODUCT.DELETE";
    Subscription["ADDRESS_CREATE"] = "ADDRESS.CREATE";
    Subscription["ADDRESS_UPDATE"] = "ADDRESS.UPDATE";
    Subscription["ADDRESS_DELETE"] = "ADDRESS.DELETE";
    Subscription["PAYMENT_METHOD_CREATE"] = "PAYMENT_METHOD.CREATE";
    Subscription["PAYMENT_METHOD_UPDATE"] = "PAYMENT_METHOD.UPDATE";
    Subscription["PAYMENT_METHOD_DELETE"] = "PAYMENT_METHOD.DELETE";
    Subscription["TRANSACTION_CREATE"] = "TRANSACTION.CREATE";
    Subscription["TRANSACTION_UPDATE"] = "TRANSACTION.UPDATE";
    Subscription["TRANSACTION_DELETE"] = "TRANSACTION.DELETE";
    Subscription["TOKEN_CREATE"] = "TOKEN.CREATE";
    Subscription["TOKEN_UPDATE"] = "TOKEN.UPDATE";
    Subscription["TOKEN_DELETE"] = "TOKEN.DELETE";
})(Subscription || (exports.Subscription = Subscription = {}));
class FluxWebsockets extends events_1.EventEmitter {
    constructor() {
        super();
        this.generalSecHandler = new security_2.GenAuthDataSecurityHandle();
        this.expectingConnectionClose = false;
        this.setMaxListeners(1000);
    }
    subscribe(subs, listener) {
        const _super = Object.create(null, {
            on: { get: () => super.on }
        });
        return __awaiter(this, void 0, void 0, function* () {
            subs = Array.isArray(subs) ? subs : [subs];
            let addRequest = false;
            subs.forEach(e => {
                if (this.listeners(e).length === 0) {
                    addRequest = true;
                }
            });
            if (addRequest) {
                let msg = yield lib_1.CMMT.sendWsCommMessage(this.websocketConnection, Requests_1.AddSubscriptionRequest, Responses_1.AddSubscriptionResponse, this.generalSecHandler, subs, true);
                if (msg.status !== 200)
                    throw new Error("could not subscribe");
            }
            subs.forEach(e => {
                _super.on.call(this, e, listener);
            });
            return this;
        });
    }
    unSubscribe(subs, listener) {
        return __awaiter(this, void 0, void 0, function* () {
            subs = Array.isArray(subs) ? subs : [subs];
            subs.forEach(element => {
                this.removeListener(element, listener);
            });
            let removalArr = [];
            subs.forEach(e => {
                if (this.listenerCount(e) === 0)
                    removalArr.push(e);
            });
            if (removalArr.length !== 0) {
                yield lib_1.CMMT.sendWsCommMessage(this.websocketConnection, Requests_1.AddSubscriptionRequest, Responses_1.AddSubscriptionResponse, this.generalSecHandler, removalArr, false);
            }
            return this;
        });
    }
    closeSocketAndListeners() {
        return __awaiter(this, void 0, void 0, function* () {
            this.expectingConnectionClose = true;
            this.websocketConnection.removeAllListeners();
            this.websocketConnection.close();
        });
    }
    static initializeSecurityHandle(pk, prk, un, pw) {
        if (!FluxWebsockets.initializationSecHandler)
            FluxWebsockets.initializationSecHandler = new security_1.MerchantEndpointsSecurityHandle(pk, prk, un, pw);
    }
    initializeConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.websocketConnection = yield lib_1.CMMT.initializeWebSocketConnection("subscribe", FluxWebsockets.initializationSecHandler);
            //
            this.websocketConnection.on('message', (msg) => {
                let jsonObj = JSON.parse(msg.toString());
                if (jsonObj.messageIdentifier === -1) {
                    let emissionData = new flux_types_1.EmissionData(jsonObj);
                    this.emit(emissionData.notifyObjectType.toUpperCase() + "." + emissionData.notifyType.toUpperCase(), emissionData);
                }
            });
            this.websocketConnection.on('close', () => {
                if (!this.expectingConnectionClose) {
                    setTimeout(() => this.initializeConnection(), 1000);
                }
            });
            this.websocketConnection.setMaxListeners(500);
        });
    }
    static getInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!FluxWebsockets.initializationSecHandler)
                throw new Error("must initialize security handle");
            let instance = new FluxWebsockets();
            yield instance.initializeConnection();
            return instance;
        });
    }
}
exports.FluxWebsockets = FluxWebsockets;
//# sourceMappingURL=FluxSockets.js.map