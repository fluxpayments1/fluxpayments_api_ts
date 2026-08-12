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

import { Currency } from "./Currency";
import { Product } from "./Product";
import { Wallet } from "./Wallet";

export interface IPaymentLink {
    id?: number;
    metadata?: string;
    uniqueId?: string;
    isReusable?: boolean;
    redirectUrl: string;    
    minutesToExpire: number;
    oneTimeUse: boolean;
    enableCrypto: boolean;
    disableACH: boolean;
    disableCard: boolean;
    isMoto: boolean;
    autoReauthEnabled?: boolean;
    reauthIntervalHours?: number;
    reauthMaxAttempts?: number;
    taxRatesId: number;
    discountId?: number;
    discountAmount?: number;
    discountName?: string;
    perProductDiscountTotal?: number;
    originalSubtotal?: number;
    requireShippingAddress: boolean;
    reusableLinkId: number
    currentStatus: string
    serviceFeeRate: number;
    liveStatus?: any;
    wallets?: Wallet[];
    currencies?: Currency[]
    products?: Product[]
    requireAccountInformation: boolean
    confidenceLevel: number
    removeOnSuccess?: any;
    paymentLink?: string;
    accountId?: number;
    emailNotificationDisabled: boolean;
    suppressReceiptAndInvoice?: boolean;
    suppressMerchantReceipt?: boolean;
    ccEmails?: string;
    isInvoice?: boolean;
    isCardCapture?: boolean;
    termsTextOverride?: string;
    paymentMethodOnFileId?: number;
    paymentMethodOnFileUniqueId?: string;
    dueDate?: number;
    qbInvoiceId?: string;
    hasBeenSyncedToQuickbooks?: boolean;
    processingFeeInversion: boolean;
    isProcessingFeeEnabled?: boolean;
    processingFeeInversionAch?: boolean;
    processingFeeInversionCard?: boolean;
    isProcessingFeeEnabledAch?: boolean;
    isProcessingFeeEnabledCard?: boolean;
    name?: string;
    memo?: string;
    customerEmail?: string;
    customerFirstName?: string;
    customerLastName?: string;
    customerPhone?: string;
    hasBeenSent?: boolean;
    businessId?: number;
    businessName?: string;
}
