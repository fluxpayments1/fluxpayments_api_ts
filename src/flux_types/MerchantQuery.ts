import { BaseQuery } from "./BaseQuery";
import { IMerchantQuery } from "./IMerchantQuery";
import { Merchant } from "./Merchant";

/**
 * This is an object that is used to query for merchants.
 */
export class MerchantQuery extends BaseQuery<Merchant> {
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
            createdAt: this.createdAt,
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
            debitCardCost: this.debitCardCost,
            visaMoneyTransferCost: this.visaMoneyTransferCost,
            masterCardMoneyTransferCost: this.masterCardMoneyTransferCost,
            achCost: this.achCost,
            phoneNumber: this.phoneNumber,
            businessName: this.businessName,
            businessDescription: this.businessDescription,
            serviceCategory: this.serviceCategory,
            documentName: this.documentName,
            documentToken: this.documentToken,
            objectType: this.objectType
        };
    }

    id: number;
    merchantApproved: boolean;
    isTaxEnabled: boolean;
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
    objectType: string = "merchant";

    public constructor(tokQ?: IMerchantQuery) {
        super(Merchant);
        Object.assign(this, tokQ);
    }

    public static createQuery(ipq: IMerchantQuery) {
        return new MerchantQuery(ipq);
    }
}
