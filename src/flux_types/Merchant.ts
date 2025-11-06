import { Currency } from './Currency';
import { FluxType } from './FluxType';
import { IMerchant } from './IMerchant';
import { Wallet } from './Wallet';

export class Merchant extends FluxType implements IMerchant {
    obName: string = "Merchant";

    getDispName(): string {
        return this.businessName
    }

    public serialize() {
        return {
            id: this.id,
            merchantApproved: this.merchantApproved,
            isTaxEnabled: this.isTaxEnabled,
            passwordHash: this.passwordHash,
            ssnToken: this.ssnToken,
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            businessType: this.businessType,
            ein: this.ein,
            creationTime: this.creationTime,
            runningBalance: this.runningBalance,
            pendingBalance: this.pendingBalance,
            settledBalance: this.settledBalance,
            failedLoginAttempts: this.failedLoginAttempts,
            streetAddress: this.streetAddress,
            country: this.country,
            zipcode: this.zipcode,
            addressState: this.addressState,
            defaultCurrency: this.defaultCurrency,
            city: this.city,
            nabMerchantkey: this.nabMerchantkey,
            creditCardCost: this.creditCardCost,
            merchantLogo: this.merchantLogo,
            debitCardCost: this.debitCardCost,
            visaMoneyTransferCost: this.visaMoneyTransferCost,
            masterCardMoneyTransferCost: this.masterCardMoneyTransferCost,
            achCost: this.achCost,
            phoneNumber: this.phoneNumber,
            businessName: this.businessName,
            businessDescription: this.businessDescription,
            objectType: this.objectType,
            serviceCategory: this.serviceCategory,
            processingFeeEnabled: this.processingFeeEnabled,
            processingFeeRate: this.processingFeeRate,
            achProcessingFeeRate: this.achProcessingFeeRate,
            cryptoProcessingFeeRate: this.cryptoProcessingFeeRate,
            serviceFeeRate: this.serviceFeeRate,
            documentName: this.documentName,
            documentToken: this.documentToken,
            displayEmail: this.displayEmail,
            processingFeeAuthAmount: this.processingFeeAuthAmount,
            processingFeeFlatAmount: this.processingFeeFlatAmount,
            paymentLinkColor: this.paymentLinkColor,
            defaultTaxRateId: this.defaultTaxRateId,
            cryptoWallets: this.cryptoWallets,
            cryptoCurrencies: this.cryptoCurrencies
        };
    }

    id: number;
    merchantApproved: boolean;
    isTaxEnabled: boolean;
    processingFeeEnabled: boolean;
    processingFeeRate: number;
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
    cryptoWallets: Wallet   [];
    cryptoCurrencies: Currency[];
    protected objectType: string = "merchant";

    public constructor(merchant?: Partial<Merchant>) {
        super(merchant, Merchant);
        Object.assign(this, merchant);
    }
}
