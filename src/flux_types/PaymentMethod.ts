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

import { Address } from "./Address";
import { FluxType } from "./FluxType";
import { IPaymentMethod } from "./IPaymentMethod";



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
    private encSensitiveData : string;
    private encAesKey;
    private aesNonce;

    protected objectType: string = "payment_method";


    public constructor (c?: Partial<IPaymentMethod>) {
        super(c, PaymentMethod)
        if (!c) return;
        this.id = c.id
        this.uniqueId = c.uniqueId
        this.metadata = c.metadata
        this.address = new Address(c.address)

    }
    public static async createInstanceLazy(acc: Partial<IPaymentMethod>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<IPaymentMethod>) {
        return await FluxType.instantiateInstance(acc, this)
    }
}
