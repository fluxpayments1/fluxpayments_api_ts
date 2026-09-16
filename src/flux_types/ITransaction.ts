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

import { Account } from "./Account";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";
import { Product } from "./Product";


export interface ITransaction {
    account: Account;
    paymentMethod: PaymentMethod;
    isReprocessRequest?: boolean;
    isRefund?: boolean;
    id: number
    uniqueId: string;
    taxRate?: number;
    taxRateId: number;
    chainNumber: number;
    paymentLinkId: number;
    defaultCurrencyAmount: number;
    confidenceLevel: number;
    currency: string;
    approvalStatus: string;
    txnHash: string;
    transactionType: string;
    currencyId: number;
    shippingAddress: Address,
    products: Product | Product[],
    inventoryOnlyOrder?: boolean,
    accountSession?: string,
    oneTimeUseToken?: string,

    // ── Checkout consent carriers — REQUEST-HOP ONLY (chargeback evidence) ──
    // Sent UP by the OTPL on a SAVED-CARD / SAVED-BANK checkout, which posts a
    // bare Transaction instead of a payment intent. Deliberately prefixed:
    // deviceFingerprint and checkoutSessionId below are SERVER-WRITTEN evidence
    // columns, and a carrier sharing either name would bind straight onto them.
    consentTermsAccepted?: boolean,
    consentTermsTextSnapshot?: string,
    consentRefundPolicySnapshot?: string,
    consentRecurringAuthAccepted?: boolean,
    consentRecurringAuthText?: string,
    consentDeviceFingerprint?: string,
    consentCheckoutSessionId?: string,

    hasBeenSyncedToQuickbooks?: boolean,
    quickbooksTransactionId?: string,
    quickbooksSyncDate?: number,
    cardBrandId?: string,
    customerEmail?: string,
    customerFirstName?: string,
    customerLastName?: string,
    customerPhone?: string,
    processorError?: string,
    gatewayResponse?: string,

    // ---- Chargeback evidence (2026-09-11) -------------------------------
    // Everything in this block is SERVER-WRITTEN and read-only, EXCEPT the
    // five fulfillment/refund fields flagged below, which the merchant edits
    // on the transaction detail page.

    /** PCI-permitted truncation only — last four digits, never a full PAN. */
    cardLastFour?: string,
    /** PCI-permitted truncation only — BIN (first six), never a full PAN. */
    cardBin?: string,

    // Gateway/network identifiers captured off the authorization response
    approvalCode?: string,
    avsCode?: string,
    cvvResult?: string,
    networkTransactionId?: string,
    retrievalReferenceNumber?: string,
    reconciliationId?: string,
    gatewayRequestId?: string,
    commerceIndicator?: string,
    initiatorType?: string,
    credentialStoredOnFile?: string,
    storedCredentialUsed?: boolean,
    previousTransactionIdSent?: string,
    entryMethod?: string,

    // Customer-context / consent evidence captured at checkout
    customerUserAgent?: string,
    customerAcceptLanguage?: string,
    deviceFingerprint?: string,
    checkoutSessionId?: string,
    termsAcceptedAt?: number,
    termsTextHash?: string,
    refundPolicyHash?: string,
    recurringAuthAcceptedAt?: number,
    achAuthAcceptedAt?: number,
    emailVerifiedAt?: number,
    /** JSON: line1,line2,city,state,zip,country,placeId,lat,lng */
    billingAddressSnapshot?: string,

    // MERCHANT-EDITABLE fulfillment + refund reason (the only writable ones)
    fulfillmentCarrier?: string,
    fulfillmentTracking?: string,
    shippedAt?: number,
    deliveredAt?: number,
    /** Set on REFUND rows. */
    refundReason?: string,

    // Sealed evidence packet pointers
    evidencePacketS3Key?: string,
    evidencePacketJsonS3Key?: string,
    evidencePacketSha256?: string,
    evidencePacketSealedAt?: number,
    evidencePacketVersion?: number,
    /** PENDING | SEALED | FAILED | BACKFILL */
    evidencePacketStatus?: string,
    evidenceRetainUntil?: number,
    evidenceLegalHold?: boolean
}