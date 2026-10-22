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
import { ProductDump } from './ProductDump';
import { Currency } from './Currency';
import { Wallet } from './Wallet';

export class PaymentLink extends FluxType implements IPaymentLink {
    public obName: string = "PaymentLink";

    public getDispName(): string {
        // Prefer the human-readable name (e.g. "Invoice - TV") — the raw OTPL
        // string ("#TlhdoYAjv...") is a meaningless label in chips/lookups.
        return this.name || this.paymentLink;
    }


    public serialize() {
        return {
            id: this.id,
            metadata: this.metadata,
            objectType: this.objectType,
            uniqueId: this.uniqueId,
            paymentLink: this.paymentLink,
            paymentLinkUrl: this.paymentLinkUrl,
            accountId: this.accountId,
            createdAt: this.createdAt,
            products: this.products?.map(p => p.serialize ? p.serialize() : p),
            enableCrypto: this.enableCrypto,
            emailNotificationDisabled: this.emailNotificationDisabled,
            suppressReceiptAndInvoice: this.suppressReceiptAndInvoice,
            suppressMerchantReceipt: this.suppressMerchantReceipt,
            ccEmails: this.ccEmails,
            updateAccInfo: this.updateAccInfo,
            updateAddInfo: this.updateAddInfo,
            serviceFeeRate: this.serviceFeeRate,
            platformFeeRate: this.platformFeeRate,
            disableACH: this.disableACH,
            disableCard: this.disableCard,
            isMoto: this.isMoto,
            autoReauthEnabled: this.autoReauthEnabled,
            reauthIntervalHours: this.reauthIntervalHours,
            reauthMaxAttempts: this.reauthMaxAttempts,
            taxRatesId: this.taxRatesId,
            discountId: this.discountId,
            discountAmount: this.discountAmount,
            discountName: this.discountName,
            perProductDiscountTotal: this.perProductDiscountTotal,
            originalSubtotal: this.originalSubtotal,
            wallets: this.wallets,
            currencies: this.currencies,
            accountEmail: this.accountEmail,
            confidenceLevel: this.confidenceLevel,
            requireShippingAddress: this.requireShippingAddress,
            requireAccountInformation: this.requireAccountInformation,
            status: this.status,
            currentStatus: this.currentStatus,
            redirectUrl: this.redirectUrl,
            oneTimeUse: this.oneTimeUse,
            isReusable: this.isReusable,
            minutesToExpire: this.minutesToExpire,
            isInvoice: this.isInvoice,
            cancelOnFailedAutoCharge: this.cancelOnFailedAutoCharge,
            isCardCapture: this.isCardCapture,
            transferDirection: this.transferDirection,
            transferStatus: this.transferStatus,
            termsTextOverride: this.termsTextOverride,
            paymentMethodOnFileId: this.paymentMethodOnFileId,
            paymentMethodOnFileUniqueId: this.paymentMethodOnFileUniqueId,
            processingFeeInversion: this.processingFeeInversion,
            isProcessingFeeEnabled: this.isProcessingFeeEnabled,
            processingFeeInversionAch: this.processingFeeInversionAch,
            processingFeeInversionCard: this.processingFeeInversionCard,
            isProcessingFeeEnabledAch: this.isProcessingFeeEnabledAch,
            isProcessingFeeEnabledCard: this.isProcessingFeeEnabledCard,
            dueDate: this.dueDate,
            qbInvoiceId: this.qbInvoiceId,
            hasBeenSyncedToQuickbooks: this.hasBeenSyncedToQuickbooks,
            needsQbSync: this.needsQbSync,
            name: this.name,
            memo: this.memo,
            customerEmail: this.customerEmail,
            customerFirstName: this.customerFirstName,
            customerLastName: this.customerLastName,
            customerPhone: this.customerPhone,
            hasBeenSent: this.hasBeenSent,
            businessId: this.businessId,
            businessName: this.businessName
        };
    }
    wallets: Wallet[]
    memo: string;
    customerEmail: string;
    customerFirstName: string;
    customerLastName: string;
    customerPhone: string;
    hasBeenSent: boolean;
    id: number;
    metadata: string;
    enableCrypto: boolean;
    uniqueId: string;
    updateAccInfo: boolean;
    updateAddInfo: boolean
    serviceFeeRate: number;
    /**
     * Platform fee rate as a PERCENT (10.4823 = 10.4823%). Computed like the
     * service fee (same base, taxed the same way) but it is Flux's charge, not
     * the merchant's. Sent on create exactly like serviceFeeRate (2026-10-22).
     */
    platformFeeRate: number;
    /**
     * Server-computed platform fee amount for the link. READ-ONLY — like the
     * other running totals on this type it is never in serialize().
     */
    totalPlatformFee: number;
    isReusable: boolean;
    taxRatesId: number;
    discountId: number;
    discountAmount: number;
    discountName: string;
    perProductDiscountTotal: number;
    originalSubtotal: number;
    processingFeeInversion: boolean;
    isProcessingFeeEnabled: boolean;
    processingFeeInversionAch: boolean;
    processingFeeInversionCard: boolean;
    isProcessingFeeEnabledAch: boolean;
    isProcessingFeeEnabledCard: boolean;
    requireAccountInformation: boolean
    disableACH: boolean;
    disableCard: boolean;
    isMoto: boolean;
    autoReauthEnabled: boolean;
    reauthIntervalHours: number;
    reauthMaxAttempts: number;
    confidenceLevel: number;
    currentStatus
    taxAmount: number;
    minutesToExpire: number;
    paymentLink: string;
    paymentLinkUrl: string;
    requireShippingAddress: boolean;
    redirectUrl: string;
    oneTimeUse: boolean;
    emailNotificationDisabled: boolean;
    suppressReceiptAndInvoice?: boolean;
    suppressMerchantReceipt?: boolean;
    /** Comma-separated additional emails CC'd on every customer email for this link. */
    ccEmails?: string;
    accountId: number;
    status: string;
    reusableLinkId: number
    accountEmail: string;
    products: Product[];
    productDumps: ProductDump[];
    currencies : Currency[];
    isInvoice: boolean;
    cancelOnFailedAutoCharge: boolean;
    isCardCapture: boolean;
    // Visa Direct transfer variant: PUSH | PULL; status is server-owned.
    transferDirection: 'PUSH' | 'PULL';
    transferStatus: string;
    termsTextOverride: string;
    paymentMethodOnFileId: number;
    paymentMethodOnFileUniqueId: string;
    dueDate: number;
    qbInvoiceId: string;
    hasBeenSyncedToQuickbooks: boolean;
    needsQbSync: boolean;
    name: string;
    /** Optional Business (customer-owned) this link/invoice bills to. */
    businessId: number;
    /** Server-denormalized business name — read-only display. */
    businessName: string;
    /**
     * Outcome of the saved-card charge, present ONLY on the createPaymentLink response
     * for a link created with a paymentMethodOnFileId (2026-10-15). Read-only: never
     * in serialize(), and the server ignores it on input.
     */
    charge?: PaymentLinkChargeResult;
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

/**
 * APPROVED: the card was charged (transactionId set). DECLINED: the card was tried and
 * refused (declineReason set). NOT_CHARGED: stopped before the card was tried
 * (declineReason says why). UNKNOWN: the charge was started but its result could not
 * be read - check the invoice before retrying.
 */
export interface PaymentLinkChargeResult {
    status: 'APPROVED' | 'DECLINED' | 'NOT_CHARGED' | 'UNKNOWN';
    transactionId?: number;
    declineReason?: string;
    /** Set on every DECLINED charge (same classifier as the platform's own retry engine). */
    retryable?: 'RETRYABLE' | 'NOT_RETRYABLE';
    /** Issuer-stated minimum wait before the next attempt, when given. */
    retryAfterHours?: number;
    /** The card network's answer on APPROVED / DECLINED (status, reason, responseCode,
     *  merchantAdvice, categoryCode, avs, cvv, approvalCode, message, description). */
    networkResponse?: { [field: string]: string };
}
