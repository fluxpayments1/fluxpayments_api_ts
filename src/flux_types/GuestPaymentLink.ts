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
import { Currency } from "./Currency";
import { CustomerAccountData } from "./CustomerAccountData";
import { Product } from "./Product";
import { Wallet } from "./Wallet";
import { FluxType } from './FluxType';
import { IGuestPaymentLink } from './IGuestPaymentLink';
import { Merchant } from './Merchant';

export class GuestPaymentLink extends FluxType implements IGuestPaymentLink {
    public obName: string = "GuestPaymentLink";

    getDispName(): string {
        return this.paymentLink
    }
    
    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            objectType: this.objectType,
            uniqueId: this.uniqueId,
            requireShippingAddress: this.requireShippingAddress,
            accountId: this.accountId,
            products: this.products,
            enableCrypto: this.enableCrypto,
            accountEmail: this.accountEmail,
            requireAccountInformation: this.requireAccountInformation,
            updatedAccount: this.updatedAccount,
            updatedAddress: this.updatedAddress,
            makeDefaultAddress: this.makeDefaultAddress,
            chooseAddressRequest: this.chooseAddressRequest,
            emailNotificationDisabled: this.emailNotificationDisabled,
            reusableLinkId: this.reusableLinkId,
            redirectUrl: this.redirectUrl,
            serviceFeeRate: this.serviceFeeRate,
            updateAccInfo: this.updateAccInfo,
            shippingAddressId: this.shippingAddressId,
            updateAddInfo: this.updateAddInfo,
            confidenceLevel: this.confidenceLevel,
            currentStatus: this.currentStatus,
            chosenCurrency: this.chosenCurrency,
            chosenWallet: this.chosenWallet,
            transactionId: this.transactionId,
            isReusable: this.isReusable,
            disableACH: this.disableACH,
            disableCard: this.disableCard,
            paymentLink: this.paymentLink,
            currencies: this.currencies,
            wallets: this.wallets,
            totalPreShipping: this.totalPreShipping,
            totalPreServiceFee: this.totalPreServiceFee,
            totalPreTaxFee: this.totalPreTaxFee,
            total: this.total,
            oneTimeUseToken: this.oneTimeUseToken,
            accountSession: this.accountSession,
            authAttempts: this.authAttempts,
            paymentLinkUrl: this.paymentLinkUrl,
            minutesToExpire: this.minutesToExpire,
            processingFeeInversion: this.processingFeeInversion
        };
    }

    id: number;
    metadata: string;
    oneTimeUseToken: string;
    accountSession: string;
    enableCrypto: boolean;
    emailNotificationDisabled: boolean
    paymentLink: string
    transactionId: number;
    disableACH: boolean;
    disableCard: boolean;
    isReusable: boolean;
    customerAccountData: CustomerAccountData;
    minutesToExpire: number;
    account: Account;
    makeDefaultAddress: boolean;
    reusableLinkId: number;
    updatedAccount: Account;
    paymentLinkUrl: string;
    updateAccInfo: boolean;
    updateAddInfo: boolean
    updatedAddress: Address;
    requireAccountInformation: boolean;
    chooseAddressRequest: boolean;
    addresses: Address[]
    confidenceLevel: number;
    uniqueId: string;
    shippingAddressId: number;
    requireShippingAddress: boolean;
    accountId: number;
    status: string;
    chosenCurrency : Currency
    chosenWallet: Wallet;
    serviceFeeRate: number;
    currentStatus: string;
    priceToPay: number
    accountEmail: string;
    taxAmount: number;
    taxRatesId: number
    merchant: Merchant
    products: Product[];
    redirectUrl: string;
    currencies: Currency[]
    wallets: Wallet[]
    totalPreShipping: number;
    totalPreServiceFee: number;
    totalPreTaxFee: number;
    total: number;
    authAttempts: number;
    processingFeeInversion: boolean;
    protected objectType: string = "payment_link";

    public constructor(oneTimePaymentLink?: Partial<IGuestPaymentLink>) {
        super(oneTimePaymentLink, GuestPaymentLink);
        Object.assign(this, oneTimePaymentLink)
    }

    public static async createInstanceLazy(acc: Partial<IGuestPaymentLink>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<IGuestPaymentLink>) {
        return await FluxType.instantiateInstance(acc, this)
    }
}
