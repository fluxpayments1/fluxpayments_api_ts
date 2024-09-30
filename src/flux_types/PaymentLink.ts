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


/**
 * All of the properties for class
 * 
 * We need a list of products to attach to the payment link
 * We need an account to attach to the payment link (if no account is attached, the user will pass in the email in the account field)
 * 
 * 
 * 
 */

import _cloneDeep from 'lodash/cloneDeep';
import { FluxType } from './FluxType';
import { IPaymentLink } from './IPaymentLink';
import { FluxIdentifier } from './FluxIdentifier';
import { Product } from './Product';
import { Currency } from './Currency';
import { Wallet } from './Wallet';

export class PaymentLink extends FluxType implements IPaymentLink {
    public obName: string = "PaymentLink";

    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            objectType: this.objectType,
            uniqueId: this.uniqueId,
            paymentLink: this.paymentLink,
            accountId: this.accountId,
            products: this.products,
            emailNotificationDisabled: this.emailNotificationDisabled,
            updateAccInfo: this.updateAccInfo,
            updateAddInfo: this.updateAddInfo,
            serviceFeeRate: this.serviceFeeRate,
            taxRatesId: this.taxRatesId,
            wallets: this.wallets,
            currencies: this.currencies,
            accountEmail: this.accountEmail,
            confidenceLevel: this.confidenceLevel,
            requireShippingAddress: this.requireShippingAddress,
            requireAccountInformation: this.requireAccountInformation,
            status: this.status,
            currentStatus: this.currentStatus,
            redirectUrl: this.redirectUrl,
            oneTimeUse: this.oneTimeUse
        };
    }
    wallets: Wallet[]
    id: number;
    metadata: string;
    uniqueId: string;
    updateAccInfo: boolean;
    updateAddInfo: boolean
    serviceFeeRate: number;
    taxRatesId: number;
    requireAccountInformation: boolean
    confidenceLevel: number;
    currentStatus
    taxAmount: number;
    paymentLink: string;
    requireShippingAddress: boolean;
    redirectUrl: string;
    oneTimeUse: boolean;
    emailNotificationDisabled: boolean;
    accountId: number;
    status: string;
    accountEmail: string;
    products: Product[];
    currencies : Currency[];
    protected objectType: string = "payment_link";

    public constructor(pl?: Partial<PaymentLink>) {
        super(pl, PaymentLink);
        Object.assign(this, pl)
    }

    public static async createInstanceLazy(acc: Partial<IPaymentLink>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<IPaymentLink>) {
        return await FluxType.instantiateInstance(acc, this)
    }
}
