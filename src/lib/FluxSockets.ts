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

import { MerchantEndpointsSecurityHandle, SecurityHandler, SecurityHandlerBase } from '../ajax/security';
import { WebSocket } from 'ws'
import { CMMT } from '../ajax/lib';
import { EmissionData } from '../flux_types/';
import { AddSubscriptionRequest } from '../ajax/Requests/';
import { AddSubscriptionResponse } from '../ajax/Responses/';
import { GenAuthDataSecurityHandle } from '../ajax/security/';
import { EventEmitter } from 'events';

export enum Subscription {
    ACCOUNT_CREATE = "account.CREATE",
    ACCOUNT_UPDATE = "account.UPDATE",
    ACCOUNT_DELETE = "account.DELETE",
    PRODUCT_CREATE = "product.CREATE",
    PRODUCT_UPDATE = "product.UPDATE",
    PRODUCT_DELETE = "product.DELETE",
    ADDRESS_CREATE = "address.CREATE",
    ADDRESS_UPDATE = "address.UPDATE",
    ADDRESS_DELETE = "address.DELETE",
    PAYMENT_METHOD_CREATE = "payment_method.CREATE",
    PAYMENT_METHOD_UPDATE = "payment_method.UPDATE",
    PAYMENT_METHOD_DELETE = "payment_method.DELETE",
    TRANSACTION_CREATE = "transaction.CREATE",
    TRANSACTION_UPDATE = "transaction.UPDATE",
    TRANSACTION_DELETE = "transaction.DELETE",
    TOKEN_CREATE = "token.CREATE",
    TOKEN_UPDATE = "token.UPDATE",
    TOKEN_DELETE = "token.DELETE"

}

export interface FluxSockets {
    closeSocketAndListeners();
    subscribe(subs: Subscription | Subscription[], listener: (emissionData: EmissionData) => void): Promise<this>;
    unSubscribe(subs: Subscription | Subscription[], listener: (emissionData: EmissionData) => void): Promise<this>
}

export class FluxWebsockets extends EventEmitter implements FluxSockets {

    private websocketConnection: WebSocket;
    private static initializationSecHandler: SecurityHandlerBase;
    private generalSecHandler: GenAuthDataSecurityHandle = new GenAuthDataSecurityHandle()
    private expectingConnectionClose: Boolean = false;
    constructor() {
        super();
        this.setMaxListeners(1000)
    }

    public async subscribe(subs: Subscription | Subscription[], listener: (emissionData: EmissionData) => void): Promise<this> {

        subs = Array.isArray(subs) ? subs : [subs]

        let addRequest: Boolean = false;



        subs.forEach(e => {
            if (this.listeners(e).length === 0) {
                addRequest = true;
            }
        })

        if (addRequest) {

            let msg: AddSubscriptionResponse = await CMMT.sendWsCommMessage(
                this.websocketConnection,
                AddSubscriptionRequest,
                AddSubscriptionResponse,
                this.generalSecHandler,
                subs,
                true
            );

            if (msg.status !== 200) throw new Error("could not subscribe")

        }

        subs.forEach(e => {
            super.on(e, listener)
        })

        return this;
    }

    public async unSubscribe(subs: Subscription | Subscription[], listener: (emissionData: EmissionData) => void): Promise<this> {

        subs = Array.isArray(subs) ? subs : [subs]

        subs.forEach(element => {
            this.removeListener(element, listener);
        });

        let removalArr = []

        subs.forEach(e => {
            if (this.listenerCount(e) === 0) removalArr.push(e);
        })

        if (removalArr.length !== 0) {
            await CMMT.sendWsCommMessage(
                this.websocketConnection,
                AddSubscriptionRequest,
                AddSubscriptionResponse,
                this.generalSecHandler,
                removalArr,
                false
            );
        }

        return this;
    }


    public async closeSocketAndListeners() {
        this.expectingConnectionClose = true;
        this.websocketConnection.removeAllListeners()
        this.websocketConnection.close()
    }

    public static initializeSecurityHandle(pk: string, prk: string, un: string, pw: string) {
        if (!FluxWebsockets.initializationSecHandler)
            FluxWebsockets.initializationSecHandler = new MerchantEndpointsSecurityHandle(pk, prk, un, pw);
    }

    public static initializeWebSecHandle(x: SecurityHandlerBase) {
        FluxWebsockets.initializationSecHandler = x
    }


    private async initializeConnection() {
        this.websocketConnection = await CMMT.initializeWebSocketConnection(
            "subscribe",
            FluxWebsockets.initializationSecHandler
        )

        if (typeof window !== 'undefined') {

            this.websocketConnection.onmessage = (msg) => {
                let jsonObj = JSON.parse(msg.data.toString());
                if (jsonObj.messageIdentifier === -1) {
                    let emissionData = new EmissionData(jsonObj)
                    this.emit(emissionData.notifyObjectType + "." + emissionData.notifyType, emissionData)
                }
            }

            this.websocketConnection.onclose = () => {
                console.log('websocket closed, reopening')
                if (!this.expectingConnectionClose) {
                    setTimeout(() => this.initializeConnection(), 1000)
                }
            }

            this.websocketConnection.onerror = (err) => {
                console.log("websocket error", err)
            }


        } else {
            //
            this.websocketConnection.on('message', (msg) => {
                let jsonObj = JSON.parse(msg.toString());
                if (jsonObj.messageIdentifier === -1) {
                    let emissionData = new EmissionData(jsonObj)
                    this.emit(emissionData.notifyObjectType + "." + emissionData.notifyType, emissionData)
                }

            })

            this.websocketConnection.on('close', () => {
                if (!this.expectingConnectionClose) {
                    setTimeout(() => this.initializeConnection(), 1000)
                }
            })



            this.websocketConnection.setMaxListeners(500);
        }
    }

    public static async getInstance() {
        if (!FluxWebsockets.initializationSecHandler) throw new Error("must initialize security handle")
        let instance = new FluxWebsockets();
        await instance.initializeConnection();

        return instance;
    }

}