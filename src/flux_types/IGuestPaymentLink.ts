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

import { Account, Address, Currency, Product, Wallet } from ".";

export interface IGuestPaymentLink {
    id?: number;
    metadata?: string;
    paymentLinkUrl?: string;
    uniqueId?: string;
    currencies: Currency[]
    requireShippingAddress: boolean;
    updateAccInfo: boolean;
    isReusable: boolean;
    processingFeeInversion: boolean;
    isProcessingFeeEnabled?: boolean;
    processingFeeInversionAch?: boolean;
    processingFeeInversionCard?: boolean;
    isProcessingFeeEnabledAch?: boolean;
    isProcessingFeeEnabledCard?: boolean;
    authAttempts: number;
    updateAddInfo: boolean;
    enableCrypto: boolean;
    updatedAccount: Account;
    shippingAddressId: number;
    updatedAddress: Address;
    chooseAddressRequest: boolean
    makeDefaultAddress: boolean;
    requireAccountInformation: boolean
    minutesToExpire: number;
    transactionId: number;
    emailNotificationDisabled: boolean
    disableACH: boolean;
    disableCard: boolean;
    reusableLinkId: number;
    wallets: Wallet[]
    currentStatus: string;
    products: Product[]
    liveStatus?: any;
    confidenceLevel: number;
    removeOnSuccess?: any;
    chosenCurrency: Currency;
    chosenWallet: Wallet
    totalPreShipping: number;
    totalPreServiceFee: number;
    totalPreTaxFee: number;
    total: number;
    paymentLink?: string;
    serviceFeeRate: number
    accountId?: number;
    oneTimeUseToken?: string;
    accountSession?: string;
    isInvoice?: boolean;
    dueDate?: number;
    qbInvoiceId?: string;
    hasBeenSyncedToQuickbooks?: boolean;
}
