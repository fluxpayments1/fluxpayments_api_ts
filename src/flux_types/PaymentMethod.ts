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

import { SensitiveClientDataSecurityHandle } from "../ajax/security/SensitiveClientDataSecurityHandle";
import { SecurityHandler } from "../ajax/security/SecurityHandler";
import { Flux } from "../lib/Flux";
import { Address } from "./Address";
import { FluxIdentifier } from "./FluxIdentifier";
import { FluxType } from "./FluxType";
import { IPaymentMethod } from "./IPaymentMethod";
import { BaseQuery } from "./BaseQuery";
import { IPaymentMethodQuery } from "./IPaymentMethodQuery";
import { SecurityHandlerBase } from "../ajax/security/SecurityHandlerBase";



export class PaymentMethod extends FluxType implements IPaymentMethod {
    public obName: string = "PaymentMethod";
    public serialize() {
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
        }
    }
    address: Address
    id: number;
    uniqueId: string;
    metadata: string;
    activeStatus: any;
    token: string;
    version: number;
    email: string;
    payType: any;
    addressId: number;
    firstName: string;
    lastName: string;
    objecttype: string;
    accountSession: string;
    private encSensitiveData: string;
    private encAesKey;
    private aesNonce;

    protected objectType: string = "payment_method";

    protected static async createInstanceSafeDbCall (inst : PaymentMethod, pt: any) {

        delete pt.accountSession
        delete pt.id
        delete pt.uniqueId
        delete pt.address
        delete pt.metadata

        
        let instance: PaymentMethod =  inst

        let secH = await (await FluxType.getBackendConn()).securityHandle

        let aesKey = SecurityHandlerBase.genAesKey()
        let aesNonce = SecurityHandlerBase.generateNonce();

        let cardBase64 =  SecurityHandlerBase.utf8ToBase64(JSON.stringify(pt))
        instance.encSensitiveData =  SecurityHandlerBase.encryptAES(aesKey, aesNonce, cardBase64)
        instance.encAesKey =  SecurityHandlerBase.encryptRsa(secH.publicKey, aesKey);
        instance.aesNonce = aesNonce

        //Clear out memory for safety
        for (const key in pt) {
            if (Object.hasOwnProperty.call(pt, key)) {
              pt[key] = undefined;
            }
        }


        let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
        let secHandle = undefined
        if (instance.accountSession) {
            secHandle = new SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, instance.accountSession)

        }

        let obs = await PaymentMethod.createObjectsSafe(instance, secHandle)
        return obs[0]

    
    }


    public constructor(c?: Partial<IPaymentMethod>) {
        super(c, PaymentMethod)
        if (!c) return;
        this.id = c.id
        this.uniqueId = c.uniqueId
        this.metadata = c.metadata
        this.address = new Address(c.address)
        this.accountSession = c.accountSession

    }

    public static async updateObjects<T extends FluxType>(ob: T | T[]): Promise<T[]> {
        let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
        let firstOb = ob[0] as PaymentMethod
        let secHandle = new SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, firstOb.accountSession)
        let obs = await f.updateObjects<T>(ob, secHandle)
        return obs;
    }

    public static async createObjects<T extends FluxType>(ob: T | T[]): Promise<FluxIdentifier[]> {
        let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
        let firstOb = ob[0] as PaymentMethod
        let secHandle = new SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, firstOb.accountSession)
        let obs: FluxIdentifier[] = await f.createObjectGeneric<T>(ob, secHandle)
        return obs;
    }

    public async delete(): Promise<void> {
        let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
        await f.deleteObjects(this.getId(), this.obType)
        Object.keys(this).forEach(e => {
            this[e] = undefined
        })
        Object.assign(this, {})
    };

    public async merge(): Promise<void> {
        let t = this.obType
        let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
        let obs = await f.updateObjects(this)
        if (obs.length !== 1) throw new Error("couldn't persist the object");
        Object.assign(this, obs[0])
    };

    public async persist(): Promise<void> {
        let obs = await PaymentMethod.createObjects(this)
        this.setId(obs[0]);
    };

    public async refresh(): Promise<void> {
        let obs = await PaymentMethod.getObjectsByIdInternal(this.getId(), this.obType)
        if (obs.length !== 1) throw new Error("couldn't refresh the object");
        Object.assign(this, obs[0])
    };

    public static async queryObjects<T extends FluxType, U extends BaseQuery<T>>(q: U, cfs?: Flux<SecurityHandler>): Promise<T[]> {
        let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
        let secHandle = undefined;
        if ((q as IPaymentMethodQuery).accountSession) {
            secHandle = new SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, (q as IPaymentMethodQuery).accountSession)
        }

        let obs = await f.getObjects<T, U>(q, secHandle)
        return obs;
    }

    public static async deleteObjects<T extends FluxType>(this: new (o?: any) => T, fi: FluxIdentifier | FluxIdentifier[], accountSession?: string): Promise<FluxIdentifier[]> {
        let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
        let secHandle = undefined;


        if (accountSession) {
            secHandle = new SensitiveClientDataSecurityHandle(f.securityHandle.publicKey, accountSession)
        }

        return await f.deleteObjects<T>(fi, this, secHandle)
    }


    protected static async createObjectsSafe<T extends FluxType>(ob: T | T[], secHandle?: SecurityHandler): Promise<T[]> {
        let f: Flux<SecurityHandler> = await FluxType.getBackendConn()
        let obs: T[] = await f.createObjectGenericSafe<T>(ob, secHandle)
        return obs;
    }


}
