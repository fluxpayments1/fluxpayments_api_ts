export interface IQuickBooksIntegrationInformation {
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
}

