import { Currency } from './Currency';
import { FluxType } from './FluxType';
import { IMerchant } from './IMerchant';
import { Wallet } from './Wallet';
export declare class Merchant extends FluxType implements IMerchant {
    obName: string;
    getDispName(): string;
    serialize(): {
        id: number;
        merchantApproved: boolean;
        isTaxEnabled: boolean;
        enableACH: boolean;
        passwordHash: string;
        ssnToken: string;
        firstName: string;
        middleName: string;
        lastName: string;
        businessType: string;
        ein: string;
        creationTime: Date;
        runningBalance: number;
        pendingBalance: number;
        settledBalance: number;
        failedLoginAttempts: number;
        streetAddress: string;
        country: string;
        zipcode: string;
        addressState: string;
        defaultCurrency: string;
        city: string;
        nabMerchantkey: number;
        creditCardCost: number;
        merchantLogo: string;
        debitCardCost: number;
        visaMoneyTransferCost: number;
        masterCardMoneyTransferCost: number;
        achCost: number;
        phoneNumber: string;
        businessName: string;
        businessDescription: string;
        objectType: string;
        serviceCategory: string;
        processingFeeEnabled: boolean;
        processingFeeRate: number;
        amexProcessingFeeRate: number;
        amexProcessingFeeFlatAmount: number;
        achProcessingFeeRate: number;
        cryptoProcessingFeeRate: number;
        serviceFeeRate: number;
        documentName: string;
        documentToken: string;
        displayEmail: string;
        processingFeeAuthAmount: number;
        processingFeeFlatAmount: number;
        paymentLinkColor: string;
        defaultTaxRateId: number;
        cryptoWallets: Wallet[];
        cryptoCurrencies: Currency[];
        passthroughAchFeeEnabled: boolean;
        passthroughCardFeeEnabled: boolean;
        invoiceThankYouMessage: string;
        defaultSuppressEmail: boolean;
        defaultSuppressReceiptAndInvoice: boolean;
        defaultSuppressMerchantReceipt: boolean;
        cardIntakeTermsText: string;
        checkoutTermsUrl: string;
        checkoutRefundPolicyUrl: string;
        checkoutPrivacyUrl: string;
        checkoutRefundPolicyText: string;
        checkoutAuthText: string;
        statementDescriptor: string;
    };
    id: number;
    merchantApproved: boolean;
    isTaxEnabled: boolean;
    enableACH: boolean;
    processingFeeEnabled: boolean;
    processingFeeRate: number;
    /** AMEX-specific rate. The checkout posts the AMEX-inclusive price as the
     *  headline and discounts non-AMEX brands off it, so this MUST reach the
     *  browser — without it the AMEX price silently equals the standard one. */
    amexProcessingFeeRate: number;
    amexProcessingFeeFlatAmount: number;
    achProcessingFeeRate: number;
    cryptoProcessingFeeRate: number;
    serviceFeeRate: number;
    processingFeeFlatAmount: number;
    processingFeeAuthAmount: number;
    passwordHash: string;
    ssnToken: string;
    displayEmail: string;
    firstName: string;
    middleName: string;
    merchantLogo: string;
    lastName: string;
    businessType: string;
    ein: string;
    creationTime: Date;
    runningBalance: number;
    pendingBalance: number;
    settledBalance: number;
    failedLoginAttempts: number;
    streetAddress: string;
    country: string;
    zipcode: string;
    addressState: string;
    defaultCurrency: string;
    city: string;
    nabMerchantkey: number;
    creditCardCost: number;
    debitCardCost: number;
    visaMoneyTransferCost: number;
    masterCardMoneyTransferCost: number;
    achCost: number;
    phoneNumber: string;
    businessName: string;
    businessDescription: string;
    serviceCategory: string;
    documentName: string;
    documentToken: string;
    paymentLinkColor: string;
    defaultTaxRateId: number;
    cryptoWallets: Wallet[];
    cryptoCurrencies: Currency[];
    passthroughAchFeeEnabled: boolean;
    passthroughCardFeeEnabled: boolean;
    invoiceThankYouMessage: string;
    defaultSuppressEmail: boolean;
    defaultSuppressReceiptAndInvoice?: boolean;
    defaultSuppressMerchantReceipt?: boolean;
    cardIntakeTermsText: string;
    checkoutTermsUrl: string;
    checkoutRefundPolicyUrl: string;
    checkoutPrivacyUrl: string;
    checkoutRefundPolicyText: string;
    /**
     * The sentence the customer ticks at checkout to authorize the charge.
     * Placeholders {{merchantName}} and {{amount}} are resolved on the payment
     * page. Blank = the platform default, which the guest payment-link load
     * fills in. Merchant-editable (Checkout tab).
     */
    checkoutAuthText: string;
    /**
     * What the cardholder sees on their bank statement. Merchant-editable —
     * an unrecognizable descriptor is a leading cause of "I don't recognize
     * this charge" chargebacks, so it is in serialize().
     */
    statementDescriptor: string;
    protected objectType: string;
    constructor(merchant?: Partial<Merchant>);
}
