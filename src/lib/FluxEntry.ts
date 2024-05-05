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

import { platform } from "os";
import { MerchantEndpointsSecurityHandle } from "../ajax/security/MerchantEndpointsSecurityHandle";
import { SecurityHandlerBase } from "../ajax/security/SecurityHandlerBase";
import { Flux } from "./Flux";
import { FluxSockets, FluxWebsockets } from "./FluxSockets";
import { GeneralSecurityHandle } from "../ajax/security/GeneralSecurityHandle";


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
export async function fluxSocket(publicKey: string, privateKey: string, username: string, passphrase: string) {
    return new Promise<FluxSockets>(async (resolve, reject) => {
        try {

            let fma = Flux.getInstance();
            let exchangedKey = await fma.getGeneralAuthorizationAccess(publicKey);
            passphrase = SecurityHandlerBase.sha256(passphrase, exchangedKey);

            FluxWebsockets.initializeSecurityHandle(exchangedKey, privateKey, username, passphrase)
            let fm = await FluxWebsockets.getInstance();
            resolve(fm);
        } catch (e) {
            reject(e);
        }

    });
}

/**
 * Resolves a Flux object that can be used to interact with the Flux API
 * 
 * @param publicKey Public key displayed in the Flux dashboard
 * @param privateKey Private key displayed in the Flux dashboard
 * @param username Username displayed in the Flux dashboard
 * @param passphrase Passphrase displayed in the Flux dashboard
 * @returns A Promise resolving to a Flux object that can be used to interact with the Flux API
 */
export async function flux(publicKey: string, privateKey: string, username: string, passphrase: string): Promise<Flux<MerchantEndpointsSecurityHandle>> {
    return new Promise<Flux<MerchantEndpointsSecurityHandle>>(async (resolve, reject) => {
        try {

            let fma = Flux.getInstance<MerchantEndpointsSecurityHandle>();
            let exchangedKey = await fma.getGeneralAuthorizationAccess(publicKey);
            passphrase = SecurityHandlerBase.sha256(passphrase, exchangedKey);

            fma.securityHandle = new MerchantEndpointsSecurityHandle(exchangedKey, privateKey, username, passphrase);
            fma.isAuthenticated = true;
            resolve(fma);
        } catch (e) {
            reject(e);
        }

    });

}

export async function fluxBrowser(publicKey: string): Promise<Flux<GeneralSecurityHandle>> {

    let fma = Flux.getInstance<GeneralSecurityHandle>()
    let exchangedKey = await fma.getGeneralAuthorizationAccess(publicKey);
    fma.securityHandle = new GeneralSecurityHandle(exchangedKey);
    fma.isAuthenticated = true;

    if (isBrowserEnv()) {
        localStorage.setItem('publicKey', publicKey);
        localStorage.setItem('exchangedKey', exchangedKey);
    }

    return fma
};




export function fluxGetter() {

    if (isBrowserEnv()) {
        let exchangedKey = localStorage.getItem('exchangedKey')

        if (!exchangedKey)throw new Error("no flux connection established, please authenticate by invoking fluxBrowser with public key")

        let fma = Flux.getInstance<GeneralSecurityHandle>()
        fma.securityHandle = new GeneralSecurityHandle(exchangedKey);
        fma.isAuthenticated = true;
        return fma;
    }

    let fi = Flux.getInstance()

    if (!fi.isAuthenticated) throw new Error("no flux connection established, please authenticate by invoking flux with your credentials")

    return fi;
}

function isBrowserEnv() {
    return typeof window !== "undefined" && typeof window.document !== "undefined";
}
