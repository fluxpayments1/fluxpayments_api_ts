export interface IQuickBooksIntegrationInformation {
    id: number;
    merchantId: number;
    accessToken: string;
    refreshToken: string;
    realmId: string;
    /** Server-owned: true when Intuit rejected the refresh token — the merchant must reconnect QuickBooks. */
    needsReconnect?: boolean;
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

