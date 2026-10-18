import { FluxType } from './FluxType';
import { IPaymentLink } from './IPaymentLink';
import { Product } from './Product';
import { ProductDump } from './ProductDump';
import { Currency } from './Currency';
import { Wallet } from './Wallet';
export declare class PaymentLink extends FluxType implements IPaymentLink {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        metadata: string;
        objectType: string;
        uniqueId: string;
        paymentLink: string;
        paymentLinkUrl: string;
        accountId: number;
        createdAt: number;
        products: (Product | {
            uniqueId: string;
            id: number;
            metadata: string;
            name: string;
            shippingFee: number;
            description: string;
            price: number;
            sku: string;
            currency: string;
            type: "SUBSCRIPTION" | "SERVICE" | "PHYSICAL_PRODUCT" | "INSTALLMENT" | "ACCOUNT_TRANSFER";
            subscriptionInterval: "MONTHLY" | "QUARTERLY" | "ANNUALLY";
            inventoryCount: number;
            imageUrl: string;
            category: string;
            enableBackorderedProducts: boolean;
            enableInventoryManagement: boolean;
            hasDynamicPrice: boolean;
            installments: number;
            objectType: string;
            orderQuantity: number;
            memo: string;
            discountId: number;
            displayOrder: number;
        })[];
        enableCrypto: boolean;
        emailNotificationDisabled: boolean;
        suppressReceiptAndInvoice: boolean;
        suppressMerchantReceipt: boolean;
        ccEmails: string;
        updateAccInfo: boolean;
        updateAddInfo: boolean;
        serviceFeeRate: number;
        disableACH: boolean;
        disableCard: boolean;
        isMoto: boolean;
        autoReauthEnabled: boolean;
        reauthIntervalHours: number;
        reauthMaxAttempts: number;
        taxRatesId: number;
        discountId: number;
        discountAmount: number;
        discountName: string;
        perProductDiscountTotal: number;
        originalSubtotal: number;
        wallets: Wallet[];
        currencies: Currency[];
        accountEmail: string;
        confidenceLevel: number;
        requireShippingAddress: boolean;
        requireAccountInformation: boolean;
        status: string;
        currentStatus: any;
        redirectUrl: string;
        oneTimeUse: boolean;
        isReusable: boolean;
        minutesToExpire: number;
        isInvoice: boolean;
        cancelOnFailedAutoCharge: boolean;
        isCardCapture: boolean;
        transferDirection: "PUSH" | "PULL";
        transferStatus: string;
        termsTextOverride: string;
        paymentMethodOnFileId: number;
        paymentMethodOnFileUniqueId: string;
        processingFeeInversion: boolean;
        isProcessingFeeEnabled: boolean;
        processingFeeInversionAch: boolean;
        processingFeeInversionCard: boolean;
        isProcessingFeeEnabledAch: boolean;
        isProcessingFeeEnabledCard: boolean;
        dueDate: number;
        qbInvoiceId: string;
        hasBeenSyncedToQuickbooks: boolean;
        needsQbSync: boolean;
        name: string;
        memo: string;
        customerEmail: string;
        customerFirstName: string;
        customerLastName: string;
        customerPhone: string;
        hasBeenSent: boolean;
        businessId: number;
        businessName: string;
    };
    wallets: Wallet[];
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
    updateAddInfo: boolean;
    serviceFeeRate: number;
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
    requireAccountInformation: boolean;
    disableACH: boolean;
    disableCard: boolean;
    isMoto: boolean;
    autoReauthEnabled: boolean;
    reauthIntervalHours: number;
    reauthMaxAttempts: number;
    confidenceLevel: number;
    currentStatus: any;
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
    reusableLinkId: number;
    accountEmail: string;
    products: Product[];
    productDumps: ProductDump[];
    currencies: Currency[];
    isInvoice: boolean;
    cancelOnFailedAutoCharge: boolean;
    isCardCapture: boolean;
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
    protected objectType: string;
    constructor(pl?: Partial<PaymentLink>);
    static createInstanceLazy(acc: Partial<IPaymentLink>): Promise<PaymentLink>;
    static createInstanceSafe(acc: Partial<IPaymentLink>): Promise<PaymentLink>;
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
    networkResponse?: {
        [field: string]: string;
    };
}
