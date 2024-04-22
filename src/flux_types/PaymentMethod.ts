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

import { SecurityHandlerBase } from "../ajax/security";
import { GeneralSecurityHandle } from "../ajax/security/GeneralSecurityHandle";
import Address from "./Address";
import { FluxTypeFactory } from "./FluxTypeBase";

export class PaymentMethod extends FluxTypeFactory {
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
    private encSensitiveData : string;
    private encAesKey;
    private aesNonce;

    protected objectType: string = "payment_method";
    protected static async createInstanceSafeDbCall (inst : PaymentMethod, pt: any) {
        let accountSession : string = pt.accountSession

        delete pt.accountSession
        delete pt.id
        delete pt.uniqueId
        delete pt.address
        delete pt.metadata

        
        let instance: PaymentMethod =  inst

        let secHandle : GeneralSecurityHandle = await PaymentMethod.getSecHandle();

        let aesKey = SecurityHandlerBase.genAesKey()
        let aesNonce = SecurityHandlerBase.generateNonce();

        let cardBase64 =  SecurityHandlerBase.utf8ToBase64(JSON.stringify(pt))
        instance.encSensitiveData =  SecurityHandlerBase.encryptAES(aesKey, aesNonce, cardBase64)
        instance.encAesKey =  SecurityHandlerBase.encryptRsa(secHandle.publicKey, aesKey);
        instance.aesNonce = aesNonce

        //Clear out memory for safety
        for (const key in pt) {
            if (Object.hasOwnProperty.call(pt, key)) {
              pt[key] = undefined;
            }
        }
        
        let fc: FluxBrowser = await this.getFrontendConn()
        let payMethod = await fc.createPaymentMethodInstanceSafe(instance, accountSession)

        if (payMethod.length === 0) throw new Error("couldn't create payment method properly")
        
        return payMethod[0]
    }

    private static async getSecHandle () {
        let fc: FluxBrw = await FluxTypeFactory.getFrontendConn() as FluxBrw

        return fc.securityHandle;
    }

    public static createInstanceLazy(a?: any): PaymentMethod {
        return new PaymentMethod(a);
    }

    public constructor (c?: Partial<any>) {
        super(c)
        if (!c) return;
        this.id = c.id
        this.uniqueId = c.uniqueId
        this.metadata = c.metadata
        this.address = new Address(c.address)

    }


    public async refresh(ftb?: FluxTokenBackend): Promise<void> {
        let accs: PaymentMethod[] = await (ftb || await FluxTypeFactory.getTokenConn()).getPaymentMethodById(this.id);

        if (accs.length !== 1) throw new Error("couldn't refresh the PaymentMethod");

        Object.assign(this, accs[0]);
    }

    public async merge(ftb?: FluxTokenBackend): Promise<void> {
        let accs: PaymentMethod[] = await (ftb || await FluxTypeFactory.getTokenConn()).updatePaymentMethod(this);

        if (accs.length !== 1) throw new Error("couldn't persist the PaymentMethod");

        Object.assign(this, accs[0]);
    }

    public async delete(ftb?: FluxTokenBackend): Promise<void> {
        await (ftb || await FluxTypeFactory.getTokenConn()).deletePaymentMethod({ id: this.id, email: this.email, objectType: this.objectType });
        Object.assign(this, {});
    }

    public async persist(ftb?: FluxTokenBackend): Promise<void> {
        let accs = await (ftb || await FluxTypeFactory.getTokenConn()).createPaymentMethod(this);
        if (accs.length !== 1) throw new Error("couldn't persist the PaymentMethod");
        this.id = accs[0].id;
    }

    // Additional static or instance methods can be added here as needed, similar to the Token class.
}
