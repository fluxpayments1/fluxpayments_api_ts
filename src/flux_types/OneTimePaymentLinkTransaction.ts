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

import _cloneDeep from 'lodash/cloneDeep';
import { Account } from "./Account";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";
import { FluxType } from './FluxType';
import { IOneTimePaymentLinkTransaction } from './IOneTimePaymentLinkTransaction';

export class OneTimePaymentLinkTransaction extends FluxType implements IOneTimePaymentLinkTransaction {
    public obName: string = "OneTimePaymentLinkTransaction";

    getDispName(): string {
        return this.id.toString()
    }
    
    public serialize() {
        return {
            id: this.id,
            oneTimePaymentLinkId: this.oneTimePaymentLinkId,
            paymentMethod: this.paymentMethod,
            billingAddress: this.billingAddress,
            account: this.account,
            shippingAddress: this.shippingAddress,
            saveData: this.saveData,
            objectType: this.objectType
        };
    }

    id: number;
    oneTimePaymentLinkId: string;
    paymentMethod: PaymentMethod;
    billingAddress: Address
    account: Account;
    shippingAddress: Address;
    accountSession: string;
    saveData: Boolean;
    protected objectType: string = "one_time_payment_link_transaction";

    public constructor(oneTimePaymentLink?: Partial<OneTimePaymentLinkTransaction>) {
        super(oneTimePaymentLink, OneTimePaymentLinkTransaction);
        Object.assign(this, oneTimePaymentLink)
    }

    public static async createInstanceLazy(acc: Partial<OneTimePaymentLinkTransaction>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<OneTimePaymentLinkTransaction>) {
        return await FluxType.instantiateInstance(acc, this)
    }
}
