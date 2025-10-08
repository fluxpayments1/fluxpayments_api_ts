import { BaseQuery } from "./BaseQuery";
import { IQuickBooksIntegrationInformationQuery } from "./IQuickBooksIntegrationInformationQuery";
import { QuickBooksIntegrationInformation } from "./QuickBooksIntegrationInformation";
/**
 * This is an object that is used to query for QuickBooks integration information.
 */
export declare class QuickBooksIntegrationInformationQuery extends BaseQuery<QuickBooksIntegrationInformation> {
    serialize(): {
        id: number;
        merchantId: number;
        accessToken: string;
        refreshToken: string;
        realmId: string;
        qbCustomerId: string;
        qbItemSale: string;
        qbItemRefund: string;
        qbItemChargeback: string;
        qbItemAdjustment: string;
        qbItemAuthFee: string;
        qbItemProcessingFee: string;
        qbExpenseAccountId: string;
        qbIncomeAccountId: string;
        qbIncomeItemId: string;
        qbBankAccountId: string;
        qbTaxLiabilityAccountId: string;
        qbTaxItemId: string;
        activeStatus: boolean;
        objectType: string;
    };
    id: number;
    merchantId: number;
    accessToken: string;
    refreshToken: string;
    realmId: string;
    qbCustomerId: string;
    qbItemSale: string;
    qbItemRefund: string;
    qbItemChargeback: string;
    qbItemAdjustment: string;
    qbItemAuthFee: string;
    qbItemProcessingFee: string;
    qbExpenseAccountId: string;
    qbIncomeAccountId: string;
    qbIncomeItemId: string;
    qbBankAccountId: string;
    qbTaxLiabilityAccountId: string;
    qbTaxItemId: string;
    activeStatus: boolean;
    objectType: string;
    constructor(qbInfoQuery?: IQuickBooksIntegrationInformationQuery);
    static createQuery(qbInfoQuery: IQuickBooksIntegrationInformationQuery): QuickBooksIntegrationInformationQuery;
}
