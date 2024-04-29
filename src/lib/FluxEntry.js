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
exports.fluxGetter = exports.fluxBrowser = exports.flux = exports.fluxSocket = void 0;
const MerchantEndpointsSecurityHandle_1 = require("../ajax/security/MerchantEndpointsSecurityHandle");
const SecurityHandlerBase_1 = require("../ajax/security/SecurityHandlerBase");
const Flux_1 = require("./Flux");
const FluxSockets_1 = require("./FluxSockets");
const GeneralSecurityHandle_1 = require("../ajax/security/GeneralSecurityHandle");
/**
 * Initializes a connection to the flux websocket.
 *
 *
 * @param publicKey
 * @param privateKey
 * @param username
 * @param passphrase
 * @returns
 */
function fluxSocket(publicKey, privateKey, username, passphrase) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let fma = Flux_1.Flux.getInstance();
                let exchangedKey = yield fma.getGeneralAuthorizationAccess(publicKey);
                passphrase = SecurityHandlerBase_1.SecurityHandlerBase.sha256(passphrase, exchangedKey);
                FluxSockets_1.FluxWebsockets.initializeSecurityHandle(exchangedKey, privateKey, username, passphrase);
                let fm = yield FluxSockets_1.FluxWebsockets.getInstance();
                resolve(fm);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.fluxSocket = fluxSocket;
/**
 * Resolves a Flux object that can be used to interact with the Flux API
 *
 * @param publicKey Public key displayed in the Flux dashboard
 * @param privateKey Private key displayed in the Flux dashboard
 * @param username Username displayed in the Flux dashboard
 * @param passphrase Passphrase displayed in the Flux dashboard
 * @returns A Promise resolving to a Flux object that can be used to interact with the Flux API
 */
function flux(publicKey, privateKey, username, passphrase) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let fma = Flux_1.Flux.getInstance();
                let exchangedKey = yield fma.getGeneralAuthorizationAccess(publicKey);
                passphrase = SecurityHandlerBase_1.SecurityHandlerBase.sha256(passphrase, exchangedKey);
                fma.securityHandle = new MerchantEndpointsSecurityHandle_1.MerchantEndpointsSecurityHandle(exchangedKey, privateKey, username, passphrase);
                fma.isAuthenticated = true;
                resolve(fma);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.flux = flux;
function fluxBrowser(publicKey) {
    return __awaiter(this, void 0, void 0, function* () {
        let fma = Flux_1.Flux.getInstance();
        let exchangedKey = yield fma.getGeneralAuthorizationAccess(publicKey);
        fma.securityHandle = new GeneralSecurityHandle_1.GeneralSecurityHandle(exchangedKey);
        fma.isAuthenticated = true;
        if (isBrowserEnv()) {
            localStorage.setItem('publicKey', publicKey);
            localStorage.setItem('exchangedKey', exchangedKey);
        }
        return fma;
    });
}
exports.fluxBrowser = fluxBrowser;
;
function fluxGetter() {
    if (isBrowserEnv()) {
        let exchangedKey = localStorage.getItem('exchangedKey');
        if (!exchangedKey)
            throw new Error("no flux connection established, please authenticate by invoking fluxBrowser with public key");
        let fma = Flux_1.Flux.getInstance();
        fma.securityHandle = new GeneralSecurityHandle_1.GeneralSecurityHandle(exchangedKey);
        fma.isAuthenticated = true;
        return fma;
    }
    let fi = Flux_1.Flux.getInstance();
    if (!fi.isAuthenticated)
        throw new Error("no flux connection established, please authenticate by invoking flux with your credentials");
    return fi;
}
exports.fluxGetter = fluxGetter;
function isBrowserEnv() {
    return typeof window !== "undefined" && typeof window.document !== "undefined";
}
//# sourceMappingURL=FluxEntry.js.map