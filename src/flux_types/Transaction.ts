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
import { AccountDump } from "./AccountDump";
import { Address } from "./Address";
import { AddressDump } from "./AddressDump";
import { FluxIdentifier } from "./FluxIdentifier";
import { FluxType } from "./FluxType";
import { IAccount } from "./IAccount";
import { IAddress } from "./IAddress";
import { IProduct } from "./IProduct";
import { ITransaction } from "./ITransaction";
import { PaymentMethod } from "./PaymentMethod";
import { Product } from "./Product";
import { ProductDump } from "./ProductDump";


export class Transaction extends FluxType implements ITransaction {
    transactionType: string;
    public getDispName(): string {
        return this.txnHash
    }

    public obName: string = "Transaction";
    txnHash: string;
    public static async createInstanceLazy(acc: Partial<ITransaction>) {
        return await FluxType.instantiateLazyInstance(acc, this)
    }

    public static async createInstanceSafe(acc: Partial<ITransaction>) {
        return await FluxType.instantiateInstance(acc, this)
    }

    approvalStatus: string;
    inventoryOnlyOrder: boolean;
    account: Account;
    shippingAddressDumpId: number;
    paymentMethodAddressDumpId: number;
    shippingAddress: Address;
    paymentMethod: PaymentMethod;
    paymentMethodAddressId: number;
    isReprocessRequest: boolean;
    baseTransaction: number;
    createdAt: number;
    accountId: number;
    isRefund: boolean;
    accountUniqueId: string;
    accountDumpId: number;
    taxRateId: number;
    confidenceLevel: number;
    paymentMethodId: number;
    paymentMethodUniqueId: string;
    uniqueId: string;
    chainNumber: number;
    defaultCurrencyAmount: number;
    amount: number;
    paymentLinkId: number;
    /**
     * For recurring renewal transactions: the catalog Product ID that this
     * single charge represents. Lets the merchant portal scope the displayed
     * line items to just the one being billed.
     */
    productId: number;
    taxRate: number;
    currency: string;
    currencyId: number;
    transactionStatus: string;
    shippingAddressId: number;
    shippingAddressUniqueId: string;
    objectType: string = "transaction";
    products : Product[];
    id: number;
    oneTimeUseToken?: string;
    accountSession?: string;

    // ── Checkout consent carriers — REQUEST-HOP ONLY, chargeback evidence ──
    //
    // WHY THEY EXIST. One OTPL checkout reaches the backend down two different
    // endpoints. A TYPED card goes through createPaymentIntentWeb, whose request
    // object carries the consent payload. A SAVED CARD / SAVED BANK posts THIS
    // object to createTransactionInstanceSafeWeb — which had no vehicle for the
    // same seven facts, so that half of the checkout recorded none of them and
    // its sealed evidence record denied an emailed verification the platform
    // actually held.
    //
    // WHY THE PREFIX. deviceFingerprint / checkoutSessionId further down this
    // class are SERVER-WRITTEN evidence columns on the TRANSACTION row; a carrier
    // sharing either name would deserialize straight onto them server-side, which
    // makes a server-written column client-settable. Prefixing five of the seven
    // and not the other two is how the wrong one eventually gets bound, so all
    // seven carry it.
    //
    // These are in serialize() BECAUSE THEY MUST BE SENT. The OTPL runs the
    // PREBUILT dist_web/lib.js, so this file changing is not enough on its own —
    // the SDK bundle has to be rebuilt or the fields silently never arrive.
    consentTermsAccepted?: boolean;
    consentTermsTextSnapshot?: string;
    consentRefundPolicySnapshot?: string;
    consentRecurringAuthAccepted?: boolean;
    consentRecurringAuthText?: string;
    consentDeviceFingerprint?: string;
    consentCheckoutSessionId?: string;

    hasBeenSyncedToQuickbooks?: boolean;
    quickbooksTransactionId?: string;
    quickbooksSyncDate?: number;
    cardBrandId?: string;

    /**
     * Fetches the account that was used
     * at the time of purchase
     * 
     * @returns The account used at the time of the transaction
     */
    public async getAccount () : Promise<IAccount>{
        let fi = new FluxIdentifier(undefined, this.accountDumpId, "account_dump")
        let accountDump = await AccountDump.getObjectsById(fi)

        if (accountDump.length === 0) throw new Error("could not find account associated with the transaction");

        let acc : AccountDump = accountDump[0]

        return acc.getInterface()
    }

    /**
     * Fetches the account as it exists in 
     * the flux system currently. This may
     * not be the account used at the time
     * of purchase if it has been updated
     * 
     * @returns Account as it exists currently
     */
    public async getCurrentAccount () : Promise<Account> {
        let fi = new FluxIdentifier(undefined, this.accountId, "account")
        let account = await Account.getObjectsById(fi)

        if (account.length === 0) throw new Error("could not find account associated with the transaction");

        let acc : Account = account[0]

        return acc;
    }
    /**
     * Fetches the payment method that was used
     * for the transaction.
     * 
     * @return Payment method at time of the purchase
     * 
     */
    public async getPaymentMethod () : Promise<PaymentMethod> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodId, "payment_method")
        let paymentMethods = await PaymentMethod.getObjectsById(fi)

        if (paymentMethods.length === 0) throw new Error("could not find payment method associated with the transaction");

        let paymentMethod = paymentMethods[0]

        return paymentMethod
    }

    /**
     * Fetches the payment method
     * 
     * 
     * @returns Payment method as it currently exists in the system
     */
    public async getCurrentPaymentMethod () : Promise<PaymentMethod> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodId, "payment_method")
        let paymentMethods = await PaymentMethod.getObjectsById(fi)

        if (paymentMethods.length === 0) throw new Error("could not find payment method associated with the transaction");

        let paymentMethod = paymentMethods[0]

        return paymentMethod
    }
    
    /**
     * Fetches the shipping address that was used
     * at the time of purchase
     * 
     * @returns The shipping address used at the time of the transaction
     */
    public async getShippingAddress () : Promise<IAddress> {
        let fi = new FluxIdentifier(undefined, this.shippingAddressDumpId, "address_dump")
        let addressDump = await AddressDump.getObjectsById(fi)

        if (addressDump.length === 0) throw new Error("could not find address associated with the transaction");

        let add : AddressDump = addressDump[0]

        return add.getInterface()
    }
    /**
     * Fetches the shipping address as it exists in 
     * the flux system currently. This may
     * not be the shipping address used at the time
     * of purchase if it has been updated
     * 
     * 
     * @returns 
     */
    public async getCurrentShippingAddress () : Promise<Address> {
        let fi = new FluxIdentifier(undefined, this.shippingAddressId, "address")
        let addresses = await Address.getObjectsById(fi)

        if (addresses.length === 0) throw new Error("could not find address associated with the transaction");

        let add : Address = addresses[0]

        return add;
    }
    
    /**
     * Fetches the payment method address that was used
     * at the time of purchase
     * 
     * @returns The payment method address used at the time of the transaction
     */
    public async getPaymentMethodAddress () : Promise<IAddress> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodAddressDumpId, "address_dump")
        let addressDump = await AddressDump.getObjectsById(fi)

        if (addressDump.length === 0) throw new Error("could not find address associated with the transaction");

        let add : AddressDump = addressDump[0]

        return add.getInterface()
    }

    /**
     * Fetches the payment method address as it exists in 
     * the flux system currently. This may
     * not be the payment method address used at the time
     * of purchase if it has been updated...
     * 
     * @returns Current address as it exists in the system
     */
    public async getCurrentPaymentMethodAddress () : Promise<Address> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodAddressId, "address")
        let addressDump = await Address.getObjectsById(fi)

        if (addressDump.length === 0) throw new Error("could not find address associated with the transaction");

        let add : Address = addressDump[0]

        return add
    }

    /**
     * Fetches the products that were used
     * at the time of purchase
     * 
     * @returns The products used at the time of the transaction
     */
    public async getProducts () : Promise<IProduct[]> {
        let prods = await Transaction.getLinkedObjectsById(ProductDump, this.getId())

        if (prods.length === 0) throw new Error("could not find address associated with the transaction");

        return prods.map(e => e.getInterface());
    }
    /**
     * Fetches the products as they exists in 
     * the flux system currently. These may
     * not be the products used at the time
     * of purchase if they have been updated
     * 
     * @returns Gets the products as they currently exist in the system
     */
    public async getCurrentProducts () : Promise<Product[]> {
        let fi = new FluxIdentifier(undefined, this.paymentMethodAddressId, "product")
        let prods = await Transaction.getLinkedObjectsById(Product, this.getId())


        if (prods.length === 0) throw new Error("could not find address associated with the transaction");

        return prods;
    }

    

    constructor(transaction?: Partial<ITransaction>) {
        super(transaction, Transaction);
        Object.assign(this, transaction);

        if (!transaction) return;

        if (transaction.products) this.products = Array.isArray(transaction.products) ? transaction.products : [transaction.products]
        if (transaction.account) {
            this.accountId = transaction.account.id
            this.accountUniqueId = transaction.account.uniqueId
        }
        if (transaction.paymentMethod) {
            this.paymentMethodId = transaction.paymentMethod.id
            this.paymentMethodUniqueId = transaction.paymentMethod.uniqueId
        }

        if (transaction.shippingAddress) {
            this.shippingAddressId = transaction.shippingAddress.id
            this.shippingAddressUniqueId = transaction.shippingAddress.uniqueId
        }



    }

    /**
     * 
     * Serializes this object into one readable by
     * the system.
     * 
     * @returns Object
     */
    public serialize() {
        return {
            id: this.id,
            accountId: this.accountId,
            accountUniqueId: this.accountUniqueId,
            paymentMethodId: this.paymentMethodId,
            paymentMethodUniqueId: this.paymentMethodUniqueId,
            chainNumber: this.chainNumber,
            uniqueId: this.uniqueId,
            defaultCurrencyAmount: this.defaultCurrencyAmount,
            confidenceLevel: this.confidenceLevel,
            txnHash: this.txnHash,
            isRefund: this.isRefund,
            isReprocessRequest: this.isReprocessRequest,
            amount: this.amount,
            taxRate: this.taxRate,
            taxRateId: this.taxRateId,
            approvalStatus: this.approvalStatus,
            baseTransaction: this.baseTransaction,
            accountSession: this.accountSession,
            oneTimeUseToken: this.oneTimeUseToken,
            // Checkout consent carriers — see the block comment on the fields.
            // Request-hop only: the backend reads them off @Transient carriers and
            // never persists them under these names.
            consentTermsAccepted: this.consentTermsAccepted,
            consentTermsTextSnapshot: this.consentTermsTextSnapshot,
            consentRefundPolicySnapshot: this.consentRefundPolicySnapshot,
            consentRecurringAuthAccepted: this.consentRecurringAuthAccepted,
            consentRecurringAuthText: this.consentRecurringAuthText,
            consentDeviceFingerprint: this.consentDeviceFingerprint,
            consentCheckoutSessionId: this.consentCheckoutSessionId,
            transactionType: this.transactionType,
            createdAt: this.createdAt,
            currency: this.currency,
            currencyId: this.currencyId,
            paymentLinkId: this.paymentLinkId,
            productId: this.productId,
            objectType: this.objectType,
            shippingAddressId: this.shippingAddressId,
            shippingAddressUniqueId: this.shippingAddressUniqueId,
            inventoryOnlyOrder: this.inventoryOnlyOrder,
            products: this.products,
            hasBeenSyncedToQuickbooks: this.hasBeenSyncedToQuickbooks,
            quickbooksTransactionId: this.quickbooksTransactionId,
            quickbooksSyncDate: this.quickbooksSyncDate,
            cardBrandId: this.cardBrandId,
            customerEmail: this.customerEmail,
            customerFirstName: this.customerFirstName,
            customerLastName: this.customerLastName,
            customerPhone: this.customerPhone,
            processorError: this.processorError,
            gatewayResponse: this.gatewayResponse,
            // ---- Chargeback evidence: the ONLY merchant-writable fields ----
            // Every other evidence field is server-written and deliberately
            // absent from serialize() so a portal edit can never send it.
            fulfillmentCarrier: this.fulfillmentCarrier,
            fulfillmentTracking: this.fulfillmentTracking,
            shippedAt: this.shippedAt,
            deliveredAt: this.deliveredAt,
            refundReason: this.refundReason
        };
    }

    customerEmail: string;
    customerFirstName: string;
    customerLastName: string;
    customerPhone: string;
    processorError: string;
    gatewayResponse: string;

    // ---- Chargeback evidence (2026-09-11) --------------------------------
    // READ-ONLY unless flagged MERCHANT-EDITABLE. Read-only fields are not in
    // serialize(), so they can never be sent back up by a portal edit.

    /** PCI-permitted truncation only — last four digits, never a full PAN. */
    cardLastFour?: string;
    /** PCI-permitted truncation only — BIN (first six), never a full PAN. */
    cardBin?: string;

    // Gateway / network identifiers off the authorization response
    approvalCode?: string;
    avsCode?: string;
    cvvResult?: string;
    /**
     * Stored-credential chaining anchor for this charge. Server-written; it
     * became a mapped column with the chargeback-evidence work (it was a
     * request-hop-only value before).
     */
    networkTransactionId?: string;
    retrievalReferenceNumber?: string;
    reconciliationId?: string;
    gatewayRequestId?: string;
    commerceIndicator?: string;
    initiatorType?: string;
    credentialStoredOnFile?: string;
    storedCredentialUsed?: boolean;
    previousTransactionIdSent?: string;
    entryMethod?: string;

    // Customer context + consent evidence captured at checkout
    customerUserAgent?: string;
    customerAcceptLanguage?: string;
    deviceFingerprint?: string;
    checkoutSessionId?: string;
    termsAcceptedAt?: number;
    termsTextHash?: string;
    refundPolicyHash?: string;
    recurringAuthAcceptedAt?: number;
    achAuthAcceptedAt?: number;
    emailVerifiedAt?: number;
    /** JSON: line1,line2,city,state,zip,country,placeId,lat,lng */
    billingAddressSnapshot?: string;

    /** MERCHANT-EDITABLE. Shipping carrier for fulfillment proof. */
    fulfillmentCarrier?: string;
    /** MERCHANT-EDITABLE. Tracking number for fulfillment proof. */
    fulfillmentTracking?: string;
    /** MERCHANT-EDITABLE. When the order shipped. */
    shippedAt?: number;
    /** MERCHANT-EDITABLE. When the order was delivered. */
    deliveredAt?: number;
    /** MERCHANT-EDITABLE. Set on REFUND rows. */
    refundReason?: string;

    // Sealed evidence packet pointers (server-written)
    evidencePacketS3Key?: string;
    evidencePacketJsonS3Key?: string;
    evidencePacketSha256?: string;
    evidencePacketSealedAt?: number;
    evidencePacketVersion?: number;
    /** PENDING | SEALED | FAILED | BACKFILL */
    evidencePacketStatus?: string;
    evidenceRetainUntil?: number;
    evidenceLegalHold?: boolean;

}